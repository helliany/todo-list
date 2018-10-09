import React, { Component } from 'react';

import "./Label.scss";

class Label extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <label className="label" htmlFor="field">
        just do it
      </label>
    );
  }
}

export default Label;
