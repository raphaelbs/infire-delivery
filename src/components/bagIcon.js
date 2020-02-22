import React from "react";
import { connect } from 'react-redux';

import ShoppingCart from '@material-ui/icons/ShoppingCart';

import Badge from "@material-ui/core/Badge";

const BagIcon = ({ bagCount }) => {
  return (
    <Badge aria-label="Quantidade de itens" badgeContent={bagCount} color="primary" max={99}>
      <ShoppingCart />
    </Badge>
  );
}

const mapStateToProps = ({ bagCount }) => ({ bagCount });

export default connect(mapStateToProps)(BagIcon);
