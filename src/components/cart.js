import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withTheme from '@material-ui/styles/withTheme';
import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/styles/makeStyles';

import { clearBagAction } from '../effects/clearBag.effect';
import { setBagVisibilityAction } from '../effects/setBagVisibility.effect';
import CartContent from './cartContent';

const dialogTitleStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}))

const Cart = ({ open, theme, onClearBag, onClose }) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dialogTitleClass = dialogTitleStyles();

  return (
    <Dialog fullScreen={fullScreen} open={open}>
      <DialogTitle disableTypography classes={dialogTitleClass}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="h6">Finalize seu pedido</Typography>
          <IconButton size="small" edge="end" aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <CartContent />
      <DialogActions>
        <Button onClick={onClearBag} color="secondary" variant="outlined">
          Limpar sacola
        </Button>
        <Button onClick={onClose} color="primary" variant="contained">
          Pedir!
        </Button>
      </DialogActions>
    </Dialog>
  )
};

const mapStateToProps = ({ bagVisibility }) => ({ open: bagVisibility });

const mapDispatchToProps = (dispatch) => ({
  onClearBag: () => dispatch(clearBagAction()),
  onClose: () => dispatch(setBagVisibilityAction(false)),
})

export default compose(
  withTheme,
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);