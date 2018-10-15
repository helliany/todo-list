import React from 'react';
import PropTypes from 'prop-types';

import "./Todo.scss";

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const Todo = ({ todos, deleteTodo }) => (
  todos.map((todo) => (
    <li
      className="todo"
      id={todo.id}
      key={todo.id}
    >
      {todo.value}
      <button
        className="todo-btn"
        onClick={deleteTodo}
        id={todo.id}
      >
        delete
      </button>
    </li>
  )
  )
)

Todo.propTypes = propTypes;

export default Todo;