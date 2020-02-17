import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import withTheme from "@material-ui/styles/withTheme";

import Header from "./header";
import { MAX_WIDTH } from "../constants";

const Layout = ({ children, subtitle }) => {
  const data = useStaticQuery(siteMetadata);
  const seo = data.pageData.edges[0].node.frontmatter;

  return (
    <>
      <Header siteTitle={seo.title} subtitle={subtitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: MAX_WIDTH,
          padding: `0px 1rem 1rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
};

export default withTheme(Layout);

const siteMetadata = graphql`
query {
  pageData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/seo\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}
`;