import React from 'react';
import PropTypes from 'prop-types';

import "./Input.scss";

const propTypes = {
  onInput: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

const Input = ({ value, onInput, onInputChange }) => (

  <input
    className="input"
    type="text"
    id="field"
    value={value}
    onInput={onInput}
    onChange={onInputChange}
    placeholder="what should be done"
  />
)

Input.propTypes = propTypes;

export default Input;
