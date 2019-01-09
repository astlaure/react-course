import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import pizza from '../../../images/pizza.png';

const Header = () => (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Intact Pizzeria</Link>
    </nav>
    <img src={pizza} alt="pizza" />
    <h2 className="text-center header-title">Best pizza in 2020 region</h2>
  </React.Fragment>
);

export default Header;
