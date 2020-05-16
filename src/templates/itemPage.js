import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '../components/Typography';
import ItemCount from '../components/itemCount';
import { displayPrice } from '../constants';

const ItemPage = ({ data }) => {
  const { id, title, image, description, price } = data.markdownRemark.frontmatter;
  const fluid = image.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title={title} description={description} image={fluid.src} />
      <Box mx={1} my={2}>
        <Typography variant="h4" component="h1" color="secondary">{title}</Typography>
      </Box>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={5} container justify="center">
          <Box width="256px" height="256px">
            <GatsbyImage
              fluid={fluid}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={5} container justify="center" alignItems="center" alignContent="space-evenly" spacing={1}>
          <Grid item xs={7} sm={12} container justify="center">
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={6} container alignItems="center" justify="flex-end">
            <ItemCount itemId={id} />
          </Grid>
          <Grid item xs={6} container alignItems="center">
            <Box ml={4}>
              <Typography color="secondary" component="span" variant="h6">
                {displayPrice(price)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
ItemPage.propTypes = {
  data: PropTypes.object,
};

export default ItemPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
`;