import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import FilterButton from './FilterButton';

import "./Filter.scss";

const propTypes = {
  todoFilters: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string
  })).isRequired,
  onFilterButtonChange: PropTypes.func.isRequired 
}

const Filter = ({ todoFilters, onFilterButtonChange }) => (
  <div className="filter">
    {
      todoFilters.map((filter) => (
        <FilterButton
          value={filter.value}
          key={uuid()}
          onFilterButtonChange = {onFilterButtonChange}
        />
      ))
    }
  </div>  
)

Filter.propTypes = propTypes;

export default Filter;
