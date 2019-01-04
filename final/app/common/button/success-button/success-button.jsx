import "./success-button.scss";
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

class SuccessButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      visible: true,
    });

    setTimeout(() => {
      this.setState({
        visible: false,
      })
    }, 2000);
  }

  render() {
    const { message } = this.props;
    const { visible } = this.state;
    return (
      <div className="success-button">
        {
          visible ? (
            <div className="dialog">
              <p>Success</p>
            </div>
          ) : null
        }
        <Button message={message} handleClick={this.handleClick} />
      </div>
    )
  }
}

SuccessButton.propTypes = {
    message: PropTypes.string.isRequired
};

export default SuccessButton;
