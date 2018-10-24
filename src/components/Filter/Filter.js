import React from 'react';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton/RadioButton';

import "./Filter.scss";

const propTypes = {
  todoFilters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  onFilterButtonChange: PropTypes.func.isRequired 
}

const Filter = ({ todoFilters, onFilterButtonChange }) => (
  <div className="filter">
    {
      todoFilters.map((filter) => (
        <RadioButton
          value={filter.value}
          key={filter.value}
          label={filter.label}
          onFilterButtonChange = {onFilterButtonChange}
        />
      ))
    }
  </div>  
)

Filter.propTypes = propTypes;

export default Filter;
