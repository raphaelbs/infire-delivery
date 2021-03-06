import { trackEvent } from '../tracking';

export const UPDATE_BAG = 'UPDATE_BAG';

export const updateBagAction = (itemId, newQtd) => ({
  type: UPDATE_BAG,
  itemId,
  newQtd,
});

export const handleUpdateBag = (state, { itemId, newQtd }) => {
  trackEvent({
    category: 'redux',
    action: UPDATE_BAG,
    label: itemId,
    value: newQtd,
  });

  return {
    ...state,
    bag: {
      ...state.bag,
      [itemId]: newQtd,
    }
  };
};
