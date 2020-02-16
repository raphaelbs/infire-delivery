/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import withTheme from "@material-ui/styles/withTheme";

import Header from "./header";

const Layout = ({ children, subtitle }) => {
  const data = useStaticQuery(siteMetadata);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} subtitle={subtitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
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
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;
