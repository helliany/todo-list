import React from 'react';
import PropTypes from 'prop-types';

import "./TodoList.scss";
import Todo from '../Todo/Todo';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
    done: PropTypes.bool
  })).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  doneTodo: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired
}

const TodoList = ({ todos, doneTodo, deleteTodo, filterValue }) => {
  let filteredTodos = todos;

  switch (filterValue) {
    case 'done':
      filteredTodos = todos.filter((todo) => todo.done);
      break;
    case 'active':
      filteredTodos = todos.filter((todo) => !todo.done);
      break;
    case 'all':
    default:
      filteredTodos = todos;
      break;
  }

  return (
    <ul className="todo-list">
      <Todo todos={filteredTodos} doneTodo={doneTodo} deleteTodo={deleteTodo} />
    </ul>
  )
}

TodoList.propTypes = propTypes;

export default TodoList;
