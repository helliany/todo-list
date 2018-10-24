import React from 'react';
import PropTypes from 'prop-types';

import "./RadioButton.scss";

const propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onFilterButtonChange: PropTypes.func.isRequired
}

const RadioButton = ({ value, label, onFilterButtonChange }) => (
  <React.Fragment>
    <input
      className="radio-btn"
      type="radio"
      name="radio"
      value={value}
      id={value}
      onChange={onFilterButtonChange}
    />
    <label className="radio-label" htmlFor={value}>{label}</label>
  </React.Fragment>
);

RadioButton.propTypes = propTypes;

export default RadioButton;
