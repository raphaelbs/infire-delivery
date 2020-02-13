import React from "react";
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Button,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/styles";
import Infire from './infire';
import { WHATSAPP_URL, PEDIR_TEXT } from "../constants";

const imageStyle = { width: 256, height: 256, margin: "0 auto" };

const imageStyles = makeStyles(theme => ({
  media: imageStyle,
}));

const cardStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    maxWidth: 400,
  },
}));

const displayPrice = value => `R$ ${(value.toFixed(2) + "").replace(".", ",")}`;

const Item = ({ title, image, price, description }) => {
  const imageClass = imageStyles();
  const cardClass = cardStyles();

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
        <CardMedia component="img" src={image} aria-hidden classes={imageClass} />
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
