import React from "react";

import Item from "../components/item";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Box } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";

const sortByOrder = (
  { order: order1 = Infinity },
  { order: order2 = Infinity }
) => (order1 > order2 ? 1 : -1);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              description
              image
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
      <SEO title="InFire Delivery" description="Cardápio online" />
      <Box component="section" display="flex" flexWrap="wrap">
        {cardapio.sort(sortByOrder).map(item => (
          <Item {...item} key={item.id} />
        ))}
      </Box>
    </Layout>
  );
};

export default IndexPage;
