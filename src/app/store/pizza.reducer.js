import {ADD_PIZZAS, SELECT_PIZZA, SET_FILTER} from './pizza.actions';

const INITIAL_STATE = {
  pizzas: [],
  selected: undefined,
  filter: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
      };
    case SELECT_PIZZA:
      return {
        ...state,
        selected: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
