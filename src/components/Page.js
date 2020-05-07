import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    return (
      <div className='page'>
        <button className='leftPage'>Sign In</button>
        <button className='rightPage'>Sign Up</button>
      </div>
    );
  }
}
