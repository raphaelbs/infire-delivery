import React, { useEffect } from "react";
import { useFirebase } from "gatsby-plugin-firebase";
import { useInView } from "react-intersection-observer";
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
import PhotoIcon from "@material-ui/icons/Photo";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/styles";
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

const Item = ({ title, image, price, description, theme }) => {
  const [src, setSrc] = React.useState("");
  const [analytics, setAnalytics] = React.useState(null);
  const [storage, setStorage] = React.useState(null);
  const [ref, inView] = useInView({ threshold: 0 });
  const imageClass = imageStyles();
  const cardClass = cardStyles();

  useFirebase(firebase => {
    setStorage(firebase.storage());
    setAnalytics(firebase.analytics());
  }, []);

  useEffect(() => {
    if (inView && !src) {
      storage
        .ref(image)
        .getDownloadURL()
        .then(url => setSrc(url));
    }
  }, [inView, storage]);

  const imageComponent = src ? (
    <CardMedia component="img" src={src} aria-hidden classes={imageClass} />
  ) : (
    <Box style={imageStyle}>
      <PhotoIcon color="disabled" style={imageStyle} />
    </Box>
  );

  const pedirUrl = WHATSAPP_URL + "?text=" + PEDIR_TEXT(title);
  const onPedir = () => {
    analytics.logEvent("pedir_clicked", { title, price });
    window.open(pedirUrl, "_blank");
  };

  const item = (
    <Card classes={cardClass}>
      <CardHeader title={title} />
      {imageComponent}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onPedir}
          fullWidth
        >
          <Typography>Pedir - {displayPrice(price)}</Typography>
          <OpenInNewIcon style={{ marginLeft: 4 }} fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Box m={1} flex={1} ref={ref}>
      {item}
    </Box>
  );
};

export default Item;
