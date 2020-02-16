export const CLEAR_BAG = 'CLEAR_BAG';

export const clearBagAction = () => ({
  type: CLEAR_BAG,
});

export const handleClearBag = (state) => ({
  ...state,
  bag: {}
})
