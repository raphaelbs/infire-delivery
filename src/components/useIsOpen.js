import { graphql, useStaticQuery } from 'gatsby';
import { useState, useLayoutEffect } from 'react';

function overrideOpenStatus() {
  if (process.env.GATSBY_CYPRESS_CI === 'true' && typeof document !== 'undefined' && document.cookie) {
    if (document.cookie.includes('x-is-open=true')) {
      return true;
    }
    if (document.cookie.includes('x-is-open=false')) {
      return false;
    }
  }

  return null;
}

const useIsOpen = () => {
  const data = useStaticQuery(statusMetadata);
  const [isOpen, setOpen] = useState(false);

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      const status = overrideOpenStatus();
      console.log('status', status);
      if (status !== null) {
        setOpen(status);
  
        return;
      }
  
      const statusData = data.status.edges[0].node.frontmatter;
    
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday']
        .map(day => statusData[day]);
      const [startHour, startMinute] = statusData.startHour.split(':').map((v) => parseInt(v));
      const [endHour, endMinute] = statusData.endHour.split(':').map((v) => parseInt(v));
      const startDate = new Date(0, 0, 0, startHour, startMinute);
      const endDate = new Date(0, 0, 0, endHour, endMinute);
  
      const intervalFn = () => {
  
        const now = new Date();
        const currentDay = now.getDay();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
    
        const currentDate = new Date(0, 0, 0, currentHour, currentMinute);
      
        const isDayAllowed = days[currentDay];
        const isHourAllowed = startDate <= currentDate && currentDate <= endDate;
      
        setOpen(isDayAllowed && isHourAllowed);
      };
      intervalFn();
      const interval = setInterval(() => requestAnimationFrame(intervalFn), 20000);
  
      return () => clearInterval(interval);
    }, [data]);
  }
  

  return [isOpen];
};

export default useIsOpen;

const statusMetadata = graphql`
query {
  status: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/status\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          startHour
          endHour
          monday
          tuesday
          wednesday
          thrusday
          friday
          saturday
          sunday
        }
      }
    }
  }
}
`;

