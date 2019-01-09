import './pizza-filter.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PizzaActions from '../../store/pizza.actions';

export class PizzaFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      active: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { setFilter } = this.props;
    const { filter, active } = this.state;

    if (active) {
      setFilter(filter);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { filter, active } = this.state;
    return (
      <form action="#" onSubmit={this.handleSubmit} className="pizza-filter">
        <div className="horizontal-form">
          <div>
            <input className="form-control" type="text" value={filter} name="filter" onChange={this.handleChange} />
          </div>
          <div>
            <div className="form-check">
              <label htmlFor="active" className="form-check-label">
                <input id="active" className="form-check-input" type="checkbox" value={active} name="active" onChange={this.handleChange} />
                Active
              </label>
            </div>
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="Filter" />
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setFilter(filter) {
    dispatch(PizzaActions.setFilter(filter));
  },
});

PizzaFilter.propTypes = {
  setFilter: PropTypes.func,
};

PizzaFilter.defaultProps = {
  setFilter() {},
};

export default connect(null, mapDispatchToProps)(PizzaFilter);
