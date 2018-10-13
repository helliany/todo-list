import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';
import TodoList from '../../components/TodoList/TodoList';

import "./App.scss";

class App extends Component {
  state = {
    isBtnDisabled: true,
    value: '',
    todos: []
  }

  onInputChange = (evt) => {
    this.setState({ value: evt.target.value });
  }

  onInput = (evt) => {
    this.setState({ isBtnDisabled: !evt.target.value.length > 0 });
  }

  addTodo = () => {
    const { value, todos } = this.state;
    this.setState({ todos: [...todos, value] });
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
        />
        <Button disabled={isBtnDisabled} onBtnClick={this.addTodo} />
        <TodoList props={todos} />
      </div>
    );
  }
}

export default App;
