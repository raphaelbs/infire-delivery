import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import makeStyles from '@material-ui/styles/makeStyles';

import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

import useIsOpen from './useIsOpen';
import Typography from './Typography';
import { updateBagAction } from '../effects/updateBag.effect';
import { updateBagCountAction } from '../effects/updateBagCount.effect';

const itemCountStyles = makeStyles(theme => ({
  fieldset: {
    border: 0,
    padding: 0,
    margin: 0,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  typography: {
    lineHeight: 3,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const ItemCount = ({ itemId }) => {
  const dispatch = useDispatch();
  const bagCount = useSelector(({ bagCount }) => bagCount);

  const updateBag = React.useCallback((itemId, newQtd) => dispatch(updateBagAction(itemId, newQtd)), []);
  const updateBagCount = React.useCallback((operation) => dispatch(updateBagCountAction(operation)), []);

  const [isOpen] = useIsOpen();
  const classes = itemCountStyles();
  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    if (bagCount === 0) {
      setQtd(0);
    }
  }, [bagCount]);

  if (!isOpen) {
    return <span></span>;
  }

  const onClick = (operation) => () => {
    const newQtd = Math.max(0, qtd + operation);
    if (qtd !== newQtd) {
      setQtd(newQtd);
      updateBag(itemId, newQtd);
      updateBagCount(operation);
    }
  }
  
  return (
    <fieldset className={classes.fieldset}>
      <legend><Typography variant="srOnly" id={`quantidade-${itemId}`}>Defina a quantidade</Typography></legend>

      <Box display="flex" lineHeight="3" flexGrow="0">
        <IconButton edge="start" aria-label="diminuir" onClick={onClick(-1)}>
          <Remove />
        </IconButton>
        <Typography variant="h6" component="span" className={classes.typography} aria-describedby={`quantidade-${itemId}`}>
          {qtd}
        </Typography>
        <IconButton edge="end" aria-label="aumentar" onClick={onClick(1)}>
          <Add />
        </IconButton>
      </Box>
    </fieldset>
  );
};

ItemCount.propTypes = {
  itemId: PropTypes.string,
};

export default React.memo(ItemCount);
