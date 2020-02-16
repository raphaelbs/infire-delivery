export const UPDATE_BAG_COUNT = 'UPDATE_BAG_COUNT';

export const updateBagCountAction = (operation) => ({
  type: UPDATE_BAG_COUNT,
  operation,
});

export const handleUpdateBagCount = (state, { operation }) => ({
  ...state,
  bagCount: state.bagCount + operation,
})
