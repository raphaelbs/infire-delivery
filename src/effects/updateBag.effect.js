export const UPDATE_BAG = 'UPDATE_BAG';

export const updateBagAction = (itemId, newQtd) => ({
  type: UPDATE_BAG,
  itemId,
  newQtd,
});

export const handleUpdateBag = (state, { itemId, newQtd }) => ({
  ...state,
  bag: {
    ...state.bag,
    [itemId]: newQtd,
  }
})
