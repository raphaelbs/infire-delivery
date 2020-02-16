export const SET_BAG_VISIBILITY = 'SET_BAG_VISIBILITY';

export const setBagVisibilityAction = (visibility) => ({
  type: SET_BAG_VISIBILITY,
  visibility,
});

export const handleSetBagVisibilityAction = (state, { visibility }) => ({
  ...state,
  bagVisibility: visibility,
})
