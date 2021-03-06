import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingCart from '@material-ui/icons/ShoppingCart';

import Badge from '@material-ui/core/Badge';

const BagIcon = () => {
  const bagCount = useSelector(({ bagCount }) => bagCount);
  
  return (
    <Badge aria-label="Quantidade de itens" badgeContent={bagCount} color="primary" max={99}>
      <ShoppingCart />
    </Badge>
  );
};

export default React.memo(BagIcon);
