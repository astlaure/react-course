import './pizza-detail.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SuccessButton from '../../common/button/success-button/success-button';

export const PizzaDetail = (props) => {
  const { pizza } = props;

  if (!pizza) { return null; }

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <h4>{pizza.price}</h4>
      <ul className="list-group">
        {
          pizza.ingredients.map((ingredient, index) => <li key={index} className="list-group-item">{ingredient}</li>)
        }
      </ul>
      <SuccessButton message="Order pizza" />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  return {
    pizza: (() => state.pizzas[match.params.id])(),
  };
};

PizzaDetail.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired(),
  }),
};

PizzaDetail.defaultProps = {
  pizza: null,
};

export default connect(mapStateToProps, null)(PizzaDetail);
