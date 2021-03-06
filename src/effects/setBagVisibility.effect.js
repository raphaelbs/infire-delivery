import { trackEvent } from '../tracking';

export const SET_BAG_VISIBILITY = 'SET_BAG_VISIBILITY';

export const setBagVisibilityAction = (visibility) => ({
  type: SET_BAG_VISIBILITY,
  visibility,
});

export const handleSetBagVisibilityAction = (state, { visibility }) => {
  trackEvent({
    category: 'redux',
    action: SET_BAG_VISIBILITY,
    value: visibility ? 1 : 0,
  }); 

  return { ...state, bagVisibility: visibility };
};
