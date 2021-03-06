import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Box from '@material-ui/core/Box';

import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

import Typography from './Typography';

const EmptyCart = () => {
  const data = useStaticQuery(graphQl);
  const { emptyMsgTitle, emptyMsgSubtitle } = data.pageData.edges[0].node.frontmatter;
  
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
      p={3}
    >
      <div>
        <ShoppingCartOutlined fontSize="large" />
        <Typography>{emptyMsgTitle}</Typography>
        <Typography variant="body2">{emptyMsgSubtitle}</Typography>
      </div>
    </Box>
  );
};

export default EmptyCart;

const graphQl = graphql`
query {
  pageData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/carrinho\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          emptyMsgTitle
          emptyMsgSubtitle
        }
      }
    }
  }
}`;
