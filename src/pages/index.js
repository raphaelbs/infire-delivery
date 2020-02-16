import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Cart from "../components/cart";
import BagButton from "../components/bagButton";
import Cardapio from "../components/cardapio";

const IndexPage = () => (
  <Layout subtitle="Cardápio online">
    <SEO title="InFire Delivery" />
    <Box mx={1} my={2}>
      <Typography variant="h4" component="h1" color="secondary">Cardápio</Typography>
    </Box>
    <Cardapio />
    <BagButton />
    <Cart />
  </Layout>
);

export default IndexPage;
