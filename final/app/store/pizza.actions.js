export const ADD_PIZZAS = 'ADD_PIZZAS';
export const SET_FILTER = 'SET_FILTER';

const addPizzas = (payload) => {
  return {
    type: ADD_PIZZAS,
    payload
  }
};

const setFilter = (payload) => {
  return {
    type: SET_FILTER,
    payload
  }
};

export default {
  addPizzas,
  setFilter
}
