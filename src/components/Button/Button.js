import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss";

const propTypes = {
  disabled: PropTypes.bool.isRequired,
  onBtnClick: PropTypes.func.isRequired,
}

const Button = ({ disabled, onBtnClick }) => (
  <button
    className="button"
    disabled={disabled}
    onClick={onBtnClick}
  >
    add
      </button>
)

Button.propTypes = propTypes;

export default Button;
