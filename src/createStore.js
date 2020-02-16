import { createStore } from 'redux';
import { UPDATE_BAG, handleUpdateBag } from './effects/updateBag.effect';
import { UPDATE_BAG_COUNT, handleUpdateBagCount } from './effects/updateBagCount.effect';
import { SET_BAG_VISIBILITY, handleSetBagVisibilityAction } from './effects/setBagVisibility.effect';
import { CLEAR_BAG, handleClearBag } from './effects/clearBag.effect';

const initialStore = {
  bag: {},
  bagCount: 0,
  bagVisibility: false,
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case UPDATE_BAG:
      return handleUpdateBag(state, action);
    case UPDATE_BAG_COUNT:
      return handleUpdateBagCount(state, action);
    case SET_BAG_VISIBILITY:
      return handleSetBagVisibilityAction(state, action);
    case CLEAR_BAG:
      return handleClearBag(state, action);
    default:
      return state;
  }
}

export default preloadedState => createStore(
  reducer,
  preloadedState,
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
