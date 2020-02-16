import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

const EmptyCart = () => (
  <Box
    width="100%"
    height="100%"
    display="flex"
    justifyContent="center"
    textAlign="center"
    flexDirection="column"
  >
    <div>
      <ShoppingCartOutlined fontSize="large" />
      <Typography>Seu carrinho está vazio ;(</Typography>
      <Typography variant="body2">A brasa está aguardando o seu pedido!</Typography>
    </div>
  </Box>
);

export default EmptyCart;