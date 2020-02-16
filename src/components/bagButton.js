import React from "react";
import { connect } from 'react-redux';

import makeStyles from "@material-ui/styles/makeStyles";

import Fab from "@material-ui/core/Fab";

import BagIcon from './bagIcon';
import { setBagVisibilityAction } from "../effects/setBagVisibility.effect";

const classStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const BagButton = ({ openCart }) => {
  const classes = classStyles();

  return (
    <Fab size="small" aria-label="Carrinho" className={classes.fab} color="secondary" onClick={openCart}>
      <BagIcon />
    </Fab>
  );
}

const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(setBagVisibilityAction(true)),
})

export default connect(null, mapDispatchToProps)(BagButton);
