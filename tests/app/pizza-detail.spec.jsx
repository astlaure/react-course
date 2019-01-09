import React from 'react';
import { shallow } from 'enzyme';
import { PizzaDetail } from '../../final/app/pizzas/pizza-detail/pizza-detail';
import { PizzaMock } from '../mocks/pizza.mock';

// Can add BeforeEach and test directly without a describe

describe('pizza detail test suite', () => { // Add done if async
  // beforeEach()

  // it()

  test('show nothing on undefined pizza', () => {
    const wrapper = shallow(<PizzaDetail pizza={undefined} />);

    expect(wrapper.find('.pizza-detail')).toHaveLength(0);
  });

  test('show pizza details', () => {
    const wrapper = shallow(<PizzaDetail pizza={PizzaMock} />);

    expect(wrapper.find('.pizza-detail')).toHaveLength(1);
  });
});
