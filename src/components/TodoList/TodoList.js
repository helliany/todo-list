import React from 'react';
import PropTypes from 'prop-types';

import "./TodoList.scss";

const propTypes = {
  props: PropTypes.arrayOf(PropTypes.string).isRequired,
  map: PropTypes.func.isRequired,
}

const uuidv4 = require('uuid/v4')

const TodoList = ({ props }) => (
  <ul className="todo-list">
    {props.map((todo) => (
      <li
        className="todo-item"
        id={uuidv4()}
        key={uuidv4()}
      >
        {todo}
      </li>))}
  </ul>
)

TodoList.propTypes = propTypes;

export default TodoList;
