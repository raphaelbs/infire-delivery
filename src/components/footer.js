import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';

import { MAX_WIDTH } from '../constants';
import Social from './social';
import Typography from './Typography';

const styles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
  },
  end: {
    marginTop: theme.spacing(-1),
    paddingBottom: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(3),
    maxWidth: MAX_WIDTH,
    margin: '0 auto',
  },
  gridItem: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      borderBottom: '1px solid ' + theme.palette.secondary.dark,
    },
  },
}));

const Footer = () => {
  const classes = styles();
  const data = useStaticQuery(seoMetadata);
  const footerData = data.footer.edges[0].node.frontmatter;

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.container}>
        <Grid className={classes.gridItem} item xs={12} sm={6} md={4}>
          <Typography component="h2" variant="h6" gutterBottom>
            {footerData.aboutUsTitle}
          </Typography>
          <Typography variant="body2">
            {footerData.aboutUsMsg}
          </Typography>
        </Grid>
        <Grid item container xs={12} sm={6} md={8}>
          <Grid className={classes.gridItem} item xs={12} md={6}>
            <Typography component="h2" variant="h6" gutterBottom>
              {footerData.businessHoursTitle}
            </Typography>
            <Typography variant="body2">
              {footerData.businessHoursMsg}
            </Typography>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={6}>
            <Typography component="h2" variant="h6" gutterBottom>
              {footerData.contactTitle}
            </Typography>
            <Typography variant="body2">
              {footerData.contactMsg}
            </Typography>
            <Social />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.end} container justify="center">
        <span>
          Copyright® 2020 <Typography color="secondary" component="span">InFire</Typography>
        </span>
      </Grid>
    </footer>
  );
};

export default Footer;

const seoMetadata = graphql`
query {
  footer: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/rodape\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          aboutUsTitle
          aboutUsMsg
          businessHoursTitle
          businessHoursMsg
          contactTitle
          contactMsg
        }
      }
    }
  }
}
`;
