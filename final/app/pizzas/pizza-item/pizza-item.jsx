import './pizza-item.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PizzaItem = (props) => {
  const { name, price, id } = props;
  return (
    <li className="list-group-item">
      <Link to={`/${id}`}>
        <div className="pizza-item">
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
      </Link>
    </li>
  );
};

PizzaItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PizzaItem;
