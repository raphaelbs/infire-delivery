import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <h1>NÃO ENCONTRADO</h1>
    <p>Esta página não existe =(</p>
  </Layout>
);

export default NotFoundPage;
