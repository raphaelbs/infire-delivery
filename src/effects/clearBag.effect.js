import { trackEvent } from '../tracking';

export const CLEAR_BAG = 'CLEAR_BAG';

export const clearBagAction = () => ({
  type: CLEAR_BAG,
});

export const handleClearBag = (state) => {
  trackEvent({
    category: 'redux',
    action: CLEAR_BAG,
  });

  return { ...state, bag: {}, bagCount: 0 };
};
