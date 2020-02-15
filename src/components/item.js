import React from "react";
import GatsbyImage from "gatsby-image";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import makeStyles from "@material-ui/styles/makeStyles";

import Infire from './infire';
import { WHATSAPP_URL, PEDIR_TEXT } from "../constants";

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

const displayPrice = value => `R$ ${(value.toFixed(2) + "").replace(".", ",")}`;

const Item = ({ title, image, price, description }) => {
  const cardClass = cardStyles();
  const imageClass = imageStyles();

  const pedirUrl = WHATSAPP_URL + "?text=" + PEDIR_TEXT(title);
  const onPedir = () => {
    trackCustomEvent({
      category: 'item',
      action: title,
      value: parseInt(price * 100, 10),
    })
    window.open(pedirUrl, "_blank");
  };

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
          <Button
            variant="contained"
            color="primary"
            onClick={onPedir}
            disableElevation
            disableRipple
            endIcon={<OpenInNewIcon fontSize="small" />}
            fullWidth
          >
            <Typography>Pedir - {displayPrice(price)}</Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Item;
