import React, { Component } from 'react';
import styled from 'styled-components';

class Bouton extends Component {
  render() {
    return <Button>Sign Up</Button>;
  }
}

export default Bouton;

const Button = styled.button`
  width: 125px;
  height: 35px;
  left: 764px;
  top: 488px;
  background: #51afad;
  border: none;
  box-shadow: 0px 2px 10px rgba(81, 175, 173, 0.25);
  border-radius: 50px;
  cursor: pointer;
  margin: 0 auto;
  color: #fbfbfb;

  &:hover {
    box-shadow: 0px 4px 15px rgba(81, 175, 173, 0.25);
  }
`;
