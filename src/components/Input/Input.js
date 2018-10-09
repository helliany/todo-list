import React, { Component } from 'react';

import "./Input.scss";

class Input extends Component {
  constructor(props) {
      super(props);
      this.state = {value: ''}
  }

  onInputChange(evt) {
      this.setState({value: evt.target.value});
  }

  render() {
    return (
      <input
        className="input"
        type="text"
        id="field"
        value={this.state.value}
        onChange={evt => this.onInputChange(evt)}
        placeholder="what should be done"
      />
    );
  }
}

export default Input;
