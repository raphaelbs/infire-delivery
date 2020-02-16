import React from "react";
import GatsbyImage from "gatsby-image";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/styles/makeStyles";

import Infire from './infire';
import { displayPrice } from "../constants";
import ItemCount from "./itemCount";

const imageStyle = { width: 256, height: 256, margin: "0 auto" };

const imageStyles = makeStyles(theme => ({
  root: imageStyle,
}));

const cardStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    maxWidth: 400,
  },
}));

const styles = makeStyles(theme => ({
  typography: {
    lineHeight: 3,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));

const Item = ({ id, title, image, price, description }) => {
  const cardClass = cardStyles();
  const imageClass = imageStyles();
  const classes = styles();

  return (
    <Box m={1} flex={1}>
      <Card classes={cardClass}>
        <CardHeader title={title} />
        <CardMedia classes={imageClass}>
          <GatsbyImage
            width={256}
            height={256}
            fluid={image.childImageSharp.fluid}
            loading="lazy"
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            <Infire text={description} />
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="space-between" width="100%">
            <ItemCount itemId={id} />
            <Typography color="secondary" variant="h6" className={classes.typography}>
              {displayPrice(price)}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Item;
