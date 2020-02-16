import React from "react";
import { useStaticQuery } from "gatsby";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Cart from "../components/cart";
import BagButton from "../components/bagButton";
import Cardapio from "../components/cardapio";

const IndexPage = () => {
  const data = useStaticQuery(pageData);
  const { title, pageTitle } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <Layout subtitle={title}>
      <SEO title={pageTitle} />
      <Box mx={1} my={2}>
        <Typography variant="h4" component="h1" color="secondary">{title}</Typography>
      </Box>
      <Cardapio />
      <BagButton />
      <Cart />
    </Layout>
  );
}

export default IndexPage;

const pageData = graphql`
query {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/home\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          pageTitle
        }
      }
    }
  }
}
`;

