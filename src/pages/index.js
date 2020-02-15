import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Item from "../components/item";
import Layout from "../components/layout";
import SEO from "../components/seo";

const sortByOrder = (
  { order: order1 = Infinity },
  { order: order2 = Infinity }
) => (order1 > order2 ? 1 : -1);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/produto/.*\\\\.md$/"}}) {
        edges {
          node {
            id
            frontmatter {
              description
              image {
                childImageSharp {
                  fluid(traceSVG: {
                    color: "#050505"
                    blackOnWhite: true
                    turdSize: 10
                    threshold: 250
                    optTolerance: 0.6
                  }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
    }
  `);

  const cardapio = data.allMarkdownRemark.edges
    .map((edge) => ({ id: edge.node.id, ...edge.node.frontmatter }));

  return (
    <Layout subtitle="Cardápio online">
      <SEO title="InFire Delivery" />
      <Box mx={1} my={2}>
        <Typography variant="h4" component="h1" color="secondary">Cardápio</Typography>
      </Box>
      <Box component="section" display="flex" flexWrap="wrap">
        {cardapio
          .sort(sortByOrder)
          .map(item => (<Item {...item} key={item.id} />))
        }
      </Box>
    </Layout>
  );
};

export default IndexPage;
