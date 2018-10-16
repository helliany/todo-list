import React from 'react';

import "./Filter.scss";

const Filter = () => (
  <div className="filter">
    <input
      className="filter-input"
      type="radio"
      name="filter"
      value="all"
      id="radio-1"
    />
    <label className="filter-label" htmlFor="radio-1">all</label>
    <input
      className="filter-input"
      type="radio"
      name="filter"
      value="active"
      id="radio-2"
    />
    <label className="filter-label" htmlFor="radio-2">active</label>
    <input
      className="filter-input"
      type="radio"
      name="filter"
      value="done"
      id="radio-3"
    />
    <label className="filter-label" htmlFor="radio-3">done</label>
  </div>
)

export default Filter;
