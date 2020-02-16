import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export const CLEAR_BAG = 'CLEAR_BAG';

export const clearBagAction = () => ({
  type: CLEAR_BAG,
});

export const handleClearBag = (state) => {
  trackCustomEvent({
    category: 'redux',
    action: CLEAR_BAG,
  });

  return { ...state, bag: {}, bagCount: 0 };
};
