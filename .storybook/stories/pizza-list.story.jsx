import "../../node_modules/bootstrap/scss/bootstrap.scss";
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { PizzaList } from '../../final/app/pizzas/pizza-list/pizza-list';

import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PizzaReducer from '../../final/app/store/pizza.reducer';

const store = createStore(PizzaReducer);
const Pizzas = [
  {
    id: 1,
    name: 'Cheese',
    price: '10.99',
    ingredients: [
      'cheese',
    ],
  },
  {
    id: 2,
    name: 'Pepperoni',
    price: '12.99',
    ingredients: [
      'cheese',
      'pepperoni',
    ],
  },
  {
    id: 3,
    name: 'Hawaiian',
    price: '15.99',
    ingredients: [
      'cheese',
      'ham',
      'pineapple',
    ],
  },
];

storiesOf('PizzaList', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('with 1 pizza', () => (
    <BrowserRouter>
      <Provider store={store}>
        <PizzaList pizzas={Pizzas.slice(0, 1)} filter={text('filter', undefined)} />
      </Provider>
    </BrowserRouter>
  ))
  .add(
    'with 3 pizzas',
    () => (
      <BrowserRouter>
        <Provider store={store}>
          <PizzaList pizzas={Pizzas} filter={undefined} />
        </Provider>
      </BrowserRouter>
    ),
    { notes: 'Like in the running app. TODO knobs' }
  );
