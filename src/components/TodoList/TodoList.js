import React from 'react';
import PropTypes from 'prop-types';

import "./TodoList.scss";

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
}

const uuid = require('uuid/v4')

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li
        className="todo-item"
        id={uuid()}
        key={uuid()}
      >
        {todo}
      </li>))}
  </ul>
)

TodoList.propTypes = propTypes;

export default TodoList;
