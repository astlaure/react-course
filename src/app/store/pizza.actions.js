export const ADD_PIZZAS = 'ADD_PIZZAS';
export const SELECT_PIZZA = 'SELECT_PIZZA';
export const SET_FILTER = 'SET_FILTER';

const addPizzas = (payload) => {
  return {
    type: ADD_PIZZAS,
    payload
  }
};

const selectPizza = (payload) => {
  return {
    type: SELECT_PIZZA,
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
  selectPizza,
  setFilter
}
