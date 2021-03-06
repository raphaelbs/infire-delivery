import React from 'react';
import { useDispatch } from 'react-redux';

import makeStyles from '@material-ui/styles/makeStyles';

import Fab from '@material-ui/core/Fab';

import useIsOpen from './useIsOpen';
import BagIcon from './bagIcon';
import { setBagVisibilityAction } from '../effects/setBagVisibility.effect';
import { MAX_WIDTH } from '../constants';

const classStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 60,
    right: `calc((100% - ${MAX_WIDTH}px)/2)`,
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(2),
    },
  },
  disabled: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));

const BagButton = () => {
  const dispatch = useDispatch();

  const openCart = React.useCallback(() => dispatch(setBagVisibilityAction(true)), []);
  
  const [isOpen] = useIsOpen();
  const classes = classStyles();

  return (
    <Fab aria-label="Carrinho" disabled={!isOpen} classes={classes} onClick={openCart} color="secondary">
      <BagIcon />
    </Fab>
  );
};

export default React.memo(BagButton);
