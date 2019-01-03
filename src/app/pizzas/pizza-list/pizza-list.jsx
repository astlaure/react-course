import './pizza-list.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PizzaItem from '../pizza-item/pizza-item';
import PizzaFilter from '../pizza-filter/pizza-filter';

export const PizzaList = (props) => {
  const { pizzas, filter } = props;

  const filteredPizzas = pizzas.filter((pizza) => {
    return pizza.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="pizza-list">
      <PizzaFilter />
      <ul className="list-group">
        {
          filteredPizzas.length > 0 ?
            filteredPizzas.map((pizza, index) => {
              return <PizzaItem key={pizza.id} name={pizza.name} price={pizza.price} id={index} />;
            }) : <p>No results</p>
        }
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    filter: state.filter,
  }
};

PizzaList.propTypes = {
  pizzas: PropTypes.array,
  filter: PropTypes.string
};

PizzaList.defaultProps = {
  pizzas: [],
  filter: ''
};

export default connect(mapStateToProps, null)(PizzaList);
