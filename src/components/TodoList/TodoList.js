import React from 'react';
import PropTypes from 'prop-types';

import "./TodoList.scss";
import Todo from '../Todo/Todo';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const TodoList = ({ todos, deleteTodo }) => (
  <ul className="todo-list">
    <Todo todos={todos} deleteTodo={deleteTodo} />
  </ul>
)

TodoList.propTypes = propTypes;

export default TodoList;
