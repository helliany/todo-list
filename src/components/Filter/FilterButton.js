import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
  onFilterButtonChange: PropTypes.func.isRequired
}

const FilterButton = ({ value, onFilterButtonChange }) => (
  <React.Fragment>
    <input
      className="filter-input"
      type="radio"
      name="filter"
      value={value}
      id={value}
      onChange={onFilterButtonChange}
    />
    <label className="filter-label" htmlFor={value}>{value}</label>
  </React.Fragment>
);

FilterButton.propTypes = propTypes;

export default FilterButton;
