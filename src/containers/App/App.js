import React, { Component } from 'react';

import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Input from '../../components/Input/Input';

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="app">
        <Label />
        <Input />
        <Button />
      </div>
    );
  }
}

export default App;
