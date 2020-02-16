import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export const UPDATE_BAG_COUNT = 'UPDATE_BAG_COUNT';

export const updateBagCountAction = (operation) => ({
  type: UPDATE_BAG_COUNT,
  operation,
});

export const handleUpdateBagCount = (state, { operation }) => {
  const bagCount = state.bagCount + operation;

  trackCustomEvent({
    category: 'redux',
    action: UPDATE_BAG_COUNT,
    value: bagCount,
  });

  return { ...state, bagCount };
};
