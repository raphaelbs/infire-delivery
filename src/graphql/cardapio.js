import { graphql } from "gatsby";

export default graphql`
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
}`;