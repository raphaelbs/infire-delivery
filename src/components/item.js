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
  IconButton,
  Box,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import PhotoIcon from "@material-ui/icons/Photo";
import { makeStyles } from "@material-ui/styles";

const imageStyle = { width: 256, height: 256, margin: "0 auto" };

const imageStyles = makeStyles(theme => ({
  media: imageStyle,
}));

const cardStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const displayPrice = value => `R$ ${(value + "").replace(".", ",")}`;

const Item = ({ title, image, price, description, theme }) => {
  const [src, setSrc] = React.useState("");
  const [storage, setStorage] = React.useState();
  const [ref, inView] = useInView({ threshold: 0 });
  const imageClass = imageStyles();
  const cardClass = cardStyles();

  useFirebase(firebase => {
    setStorage(firebase.storage());
  }, []);

  useEffect(() => {
    if (inView && !src) {
      console.log(title);
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
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Typography variant="h5" color="secondary" component="p">
          {displayPrice(price)}
        </Typography>
      </CardActions>
    </Card>
  );

  return <div ref={ref}>{item}</div>;
};

export default Item;
