import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LogoImg = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "infire-logo.jpeg" }) {
        childImageSharp {
          fixed(width: 96, height: 96, traceSVG: {
            color: "#FFCF9E"
            blackOnWhite: false
          }) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return <Img alt={alt} fixed={data.file.childImageSharp.fixed} />;
};

export default LogoImg;
