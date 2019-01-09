import './app.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ApiUtil from './utils/api.util';
import PizzaList from './pizzas/pizza-list/pizza-list';
import PizzaDetail from './pizzas/pizza-detail/pizza-detail';
import PizzaActions from './store/pizza.actions';
import Header from './common/header/header';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  componentDidMount() {
    const { addPizzas } = this.props;
    ApiUtil.get('/pizzas')
      .then((response) => {
        addPizzas(response);
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div className="error">
          <p>There was an error</p>
        </div>
      );
    }

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/:id" component={PizzaDetail} />
          <Route path="/" exact component={PizzaList} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPizzas(pizzas) {
    dispatch(PizzaActions.addPizzas(pizzas));
  },
});

App.propTypes = {
  addPizzas: PropTypes.func,
};

App.defaultProps = {
  addPizzas() {},
};

export default connect(null, mapDispatchToProps)(App);
