import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { message, handleClick } = props;
  return (
    <button className="btn btn-outline-primary" type="button" onClick={handleClick}>{message}</button>
  );
};

Button.propTypes = {
  message: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
