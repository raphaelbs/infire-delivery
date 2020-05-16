import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

import makeStyles from '@material-ui/styles/makeStyles';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Typography from './Typography';
import { displayPrice } from '../constants';
import EmptyCart from './emptyCart';
import CartSteps from './cartSteps';

const dialogContentStyle = { padding: 0 };
const listItemStyle = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
  }
}));

const CartContent = ({ selectedItems, total, freteMsg }) => {
  const listClass = listItemStyle();

  const list = (
    <List>
      {selectedItems.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar>
            <GatsbyImage
              fixed={item.image.childImageSharp.fixed}
              loading="lazy"
            />
          </ListItemAvatar>
          <ListItemText
            classes={listClass}
            primary={item.title}
            secondary={displayPrice(item.price)}
          />
          <ListItemSecondaryAction>
            <Typography>x{item.qtd}</Typography>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <Divider />
      <ListItem key="total">
        <ListItemText primary="Total" />
        <ListItemSecondaryAction>
          <Typography>{displayPrice(total)}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem key="frete">
        <ListItemText primary={freteMsg} />
      </ListItem>
    </List>
  );

  const cartContent = (
    <Fragment>
      <CartSteps />
      <Divider />
      {list}
    </Fragment>
  );

  const content = selectedItems.length ? cartContent : <EmptyCart />;

  return (
    <DialogContent style={dialogContentStyle} dividers>
      {content}
    </DialogContent>
  );
};
CartContent.propTypes = {
  selectedItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  freteMsg: PropTypes.string.isRequired,
};

export default CartContent;