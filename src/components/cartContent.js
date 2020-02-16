import React from 'react';
import { useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import { connect } from 'react-redux';

import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import cardapioGQL from '../graphql/cardapio';
import { displayPrice } from '../constants';
import { makeStyles } from '@material-ui/styles';

const dialogContentStyle = { padding: 0 };
const listItemStyle = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
  }
}));

const CartContent = ({ bag }) => {
  const data = useStaticQuery(cardapioGQL);
  const listClass = listItemStyle();

  const cardapio = data.allMarkdownRemark.edges
  .reduce((edges, edge) => ({ ...edges, [edge.node.id]: edge.node.frontmatter }), {});

  const filteredBag = Object.entries(bag).filter(([, qtd]) => qtd > 0);
  const selectedItems = filteredBag.map(([id, qtd]) => ({ ...cardapio[id], qtd, id }));
  const total = selectedItems.reduce((sum, { qtd, price }) => qtd * price + sum, 0);

  return (
    <DialogContent style={dialogContentStyle} dividers>
      <List>
        {selectedItems.map((item) => (
          <ListItem key={item.id}>
             <ListItemAvatar>
                <GatsbyImage
                  fluid={item.image.childImageSharp.fluid}
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
    </DialogContent>
  )
};

const mapStateToProps = ({ bag }) => ({ bag });

export default connect(mapStateToProps)(CartContent);