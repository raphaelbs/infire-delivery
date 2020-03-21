import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import withTheme from '@material-ui/styles/withTheme';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/styles/makeStyles';

import Typography from './Typography';
import { clearBagAction } from '../effects/clearBag.effect';
import { setBagVisibilityAction } from '../effects/setBagVisibility.effect';
import CartContent from './cartContent';
import { PEDIR_TEXT, WHATSAPP_URL } from '../constants';
import { ecommerceAddItem, ecommerceFinalize } from '../utils/ga';

const dialogTitleStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}))

const Cart = ({ open, bag, theme, onClearBag, onClose }) => {
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const dialogTitleClass = dialogTitleStyles();
  const data = useStaticQuery(graphQl);

  const { title, pedirBtn, limparBtn, freteMsg } = data.pageData.edges[0].node.frontmatter;

  const cardapio = data.produtos.edges
  .reduce((edges, edge) => ({ ...edges, [edge.node.id]: edge.node.frontmatter }), {});

  const filteredBag = Object.entries(bag).filter(([, qtd]) => qtd > 0);
  const selectedItems = filteredBag.map(([id, qtd]) => ({ ...cardapio[id], qtd, id }));
  const total = selectedItems.reduce((sum, { qtd, price }) => qtd * price + sum, 0);

  const pedirUrl = WHATSAPP_URL + "?text=" + PEDIR_TEXT(selectedItems);
  const onPedir = () => {
    selectedItems.forEach(({ title, price, qtd, id }) => {
      ecommerceAddItem({
        id,
        name: title,
        price,
        quantity: qtd,
      });
      Array(qtd).fill(1).forEach(() =>
        trackCustomEvent({
          category: 'item',
          action: title,
          value: parseInt(price * 100, 10),
        })
      );
    });
    ecommerceFinalize();
    window.open(pedirUrl, "_blank");
  };

  return (
    <Dialog fullScreen={fullScreen} open={open}>
      <DialogTitle disableTypography classes={dialogTitleClass}>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>
          <IconButton size="small" edge="end" aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <CartContent selectedItems={selectedItems} total={total} freteMsg={freteMsg} />
      <DialogActions>
        <Button disabled={!total} onClick={onClearBag} color="secondary" variant="outlined">
          {limparBtn}
        </Button>
        <Button
          disableElevation
          disabled={!total}
          onClick={onPedir}
          color="primary"
          variant="contained"
          endIcon={<OpenInNewIcon fontSize="small" />}
        >{pedirBtn}</Button>
      </DialogActions>
    </Dialog>
  )
};

const mapStateToProps = ({ bag, bagVisibility }) => ({ bag, open: bagVisibility });

const mapDispatchToProps = (dispatch) => ({
  onClearBag: () => dispatch(clearBagAction()),
  onClose: () => dispatch(setBagVisibilityAction(false)),
})

export default compose(
  withTheme,
  connect(mapStateToProps, mapDispatchToProps)
)(Cart);

const graphQl = graphql`
query {
  produtos: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/produto/.*\\\\.md$/"}}) {
    edges {
      node {
        id
        frontmatter {
          image {
            childImageSharp {
              fixed(width: 56, height: 56, traceSVG: {
                color: "#050505"
                blackOnWhite: true
                turdSize: 10
                threshold: 250
                optTolerance: 0.6
              }) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
          price
          title
        }
      }
    }
  }
  pageData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/carrinho\\\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          title
          freteMsg
          pedirBtn
          limparBtn
        }
      }
    }
  }
}`;

