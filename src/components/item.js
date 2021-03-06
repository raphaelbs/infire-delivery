import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';

import Typography from './Typography';
import { displayPrice } from '../constants';
import ItemCount from './itemCount';

const imgStyle = { objectFit: 'contain' };
const gatsbyImageStyle = { maxHeight: 256, display: 'block', margin: '0 auto' };

const imageStyles = makeStyles(() => ({
  root: {
    width: 256,
    maxHeight: 256,
    margin: '0 auto',
    flex: '1'
  },
}));

const cardStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
}));

const styles = makeStyles(theme => ({
  price: {
    lineHeight: 3,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  description: {
    width: 256,
    height: 64,
  }
}));

const Item = ({ id, title, image, price, description }) => {
  const cardClass = cardStyles();
  const imageClass = imageStyles();
  const classes = styles();

  return (
    <div data-testid="product">
      <Card classes={cardClass}>
        <CardHeader title={title} />
        <CardMedia classes={imageClass}>
          <GatsbyImage style={gatsbyImageStyle} fixed={image.childImageSharp.fixed} loading="lazy" imgStyle={imgStyle} />
        </CardMedia>
        <CardContent>
          <Typography className={classes.description} variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="space-between" width="100%">
            <ItemCount itemId={id} />
            <Typography color="secondary" component="span" variant="h6" className={classes.price}>
              {displayPrice(price)}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};
Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
