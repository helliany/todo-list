import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./Button.scss";

const propTypes = {
  disabled: PropTypes.bool.isRequired,
  onBtnClick: PropTypes.func.isRequired,
}

class Button extends Component {
  getConsoleLog = () => console.log('button clicked');

  render() {
    const { disabled, onBtnClick } = this.props;
    return (
      <button
        className="button"
        disabled={disabled}
        onClick={onBtnClick}
      >
        add
      </button>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
