

import { ADD_BASKET } from '../actions/types';

// Redux Actions
export const addToBasket = (product) => ({
  type: ADD_BASKET,
  product
});

// Redux Reducer
const initialState = {
  basket: 0
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return {
        ...state,
        basket: state.basket+1
      };
    default:
      return state;
  }
};

export default basketReducer