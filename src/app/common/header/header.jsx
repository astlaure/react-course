import './header.scss';
import pizza from '../../../images/pizza.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={'/'}>Intact Pizzeria</Link>
      </nav>
      <img src={pizza} alt="pizza"/>
      <h2 className="text-center header-title">Best pizza in 2020 region</h2>
    </React.Fragment>
  )
};

export default Header;
