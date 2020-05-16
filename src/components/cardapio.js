import React, { memo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';

import Item from '../components/item';

const sortByOrder = (
  { order: order1 = Infinity },
  { order: order2 = Infinity }
) => (order1 > order2 ? 1 : -1);

const Cardapio = () => {
  const data = useStaticQuery(cardapioGQL);
  const cardapio = data.allMarkdownRemark.edges
    .map((edge) => ({ id: edge.node.id, ...edge.node.frontmatter }));

  return (
    <Grid container>
      {
        cardapio
          .sort(sortByOrder)
          .map(item => (<Item {...item} key={item.id} />))
      }
    </Grid>
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
              }, height: 256) {
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