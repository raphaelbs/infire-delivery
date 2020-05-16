import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { makeStyles } from '@material-ui/styles';

const stepperStyle = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    minWidth: 320,
  }
}));

const CartSteps = () => {
  const stepperClass = stepperStyle();
  const data = useStaticQuery(graphQl);

  const { step1, step2 } = data.pageData.edges[0].node.frontmatter;

  return (
    <Stepper classes={stepperClass}>
      <Step>
        <StepLabel>{step1}</StepLabel>
      </Step>
      <Step>
        <StepLabel>{step2}</StepLabel>
      </Step>
    </Stepper>
  );
};

export default CartSteps;

const graphQl = graphql`
query {
  pageData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/carrinho\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          step1,
          step2
        }
      }
    }
  }
}`;
