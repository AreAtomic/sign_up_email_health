import React, { Component } from 'react';
import Img from '../logo.png';

export default class Logo extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div style={this.props.style}>
        <img src={Img} style={this.props.style} />
      </div>
    );
  }
}
