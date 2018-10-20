import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import "./Todo.scss";

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  doneTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

const Todo = ({ todos, doneTodo, deleteTodo }) => (
  todos.map(todo => {
    const className = todo.done 
    ? cx('todo', 'todo-done')
    : cx('todo');
    return (
      <li
        className={className}
        id={todo.id}
        key={todo.id}
      >
        {todo.value}
        <button
          className="todo-btn-done"
          onClick={doneTodo}
          id={todo.id}
        >
          done
      </button>
        <button
          className="todo-btn-delete"
          onClick={deleteTodo}
          id={todo.id}
        >
          delete
      </button>
      </li>
    )
  }
  )
)

Todo.propTypes = propTypes;

export default Todo;
