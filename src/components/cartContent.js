import React from 'react';
import GatsbyImage from 'gatsby-image';

import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { displayPrice } from '../constants';
import EmptyCart from './emptyCart';
import { makeStyles } from '@material-ui/styles';

const dialogContentStyle = { padding: 0 };
const listItemStyle = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
  }
}));

const CartContent = ({ selectedItems, total }) => {
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
    </List>
  );

  const content = selectedItems.length ? list : <EmptyCart />;

  return (
    <DialogContent style={dialogContentStyle} dividers>
      {content}
    </DialogContent>
  )
};

export default CartContent;