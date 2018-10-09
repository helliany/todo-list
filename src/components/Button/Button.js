import React, { Component } from 'react';

import "./Button.scss";

class Button extends Component {
  getConsoleLog = () => console.log('button clicked');

  render() {
    return (
      <button
        className="button"
      >
        add
      </button>
    );
  }
}

export default Button;
