import React, { Component } from 'react';
import uuid from 'uuid';

import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import TodoList from '../../components/TodoList/TodoList';
import Filter from '../../components/Filter/Filter';

import './App.scss';

class App extends Component {
  state = {
    isBtnDisabled: true,
    value: '',
    todos: []
  }

  onInputChange = evt => {
    this.setState({ value: evt.target.value });
  }

  onInput = evt => {
    this.setState({ isBtnDisabled: !evt.target.value.length > 0 });
  }

  onEnterPress = evt => {
    if (evt.key === 'Enter' && evt.target.value.length > 0) {
      this.addTodo();
    }
  }

  addTodo = () => {
    const { value, todos } = this.state;

    const todo = {
      value,
      id: uuid(),
      done: false,
    }

    this.setState({
      isBtnDisabled: true,
      value: '',
      todos: [...todos, todo]
    });
  }

  deleteTodo = evt => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => (
        todo.id !== evt.target.id
      ))
    });
  }

  doneTodo = evt => {
    const { todos } = this.state;
    this.setState({ todos: todos.map(todo => (todo.id === evt.target.id ? { ...todo, done: !todo.done } : todo)) });
  }

  render() {
    const { isBtnDisabled, value, todos } = this.state;
    return (
      <div className="app">
        <Label />
        <Input
          value={value}
          onInput={this.onInput}
          onInputChange={this.onInputChange}
          onEnterPress={this.onEnterPress}
        />
        <Button disabled={isBtnDisabled} onBtnClick={this.addTodo} />
        <Filter />
        <TodoList todos={todos} doneTodo={this.doneTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
