import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import makeStyles from '@material-ui/styles/makeStyles';

import Item from '../components/item';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: theme.spacing(3),
  },
}));

const sortByOrder = (
  { order: order1 = Infinity },
  { order: order2 = Infinity }
) => (order1 > order2 ? 1 : -1);

const Cardapio = () => {
  const classes = useStyles();
  const data = useStaticQuery(cardapioGQL);
  const cardapio = data.allMarkdownRemark.edges
    .map((edge) => ({ id: edge.node.id, ...edge.node.frontmatter }));

  return (
    <div className={classes.container}>
      {
        cardapio
          .sort(sortByOrder)
          .map(item => (<Item {...item} key={item.id} />))
      }
    </div>
  );
};

export default memo(Cardapio);

const cardapioGQL = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/produto/.*\\\\.md$/"}}) {
    edges {
      node {
        id
        frontmatter {
          description
          image {
            childImageSharp {
              fixed(traceSVG: {
                color: "#050505"
                blackOnWhite: true
                turdSize: 10
                threshold: 250
                optTolerance: 0.6
              }, width: 256) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
          price
          order
          title
        }
      }
    }
  }
}`;