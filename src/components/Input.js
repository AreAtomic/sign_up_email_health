import React, { Component } from 'react';
import styled from 'styled-components';

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { nom, email, password } = this.state;
    return (
      <form>
        <Box>
          <label htmlFor='email'>Nom d'Utilisateur</label>
          <TextPlace
            id='name'
            type='text'
            value={nom}
            placeholder='Entrez votre nom'
            onChange={this.handleChange}
          />
        </Box>
        <Box>
          <label htmlFor='email'>Email</label>
          <TextPlace
            id='email'
            type='email'
            value={email}
            placeholder='jhondoe@aureliensebe.com'
            onChange={this.handleChange}
          />
        </Box>
        <Box>
          <label htmlFor='email'>Nom d'Utilisateur</label>
          <TextPlace
            id='password'
            type='password'
            value={password}
            placeholder='Entrez votre mot de passe'
            onChange={this.handleChange}
          />
        </Box>
      </form>
    );
  }
}

export default Input;

const Box = styled.div`
  width: 353px;
  border-bottom: 1px solid #696b73;
  display: grid;
  margin: 40px auto;
`;

const TextPlace = styled.input`
  border: none;
  color: #fbfbfb;
  background: transparent;
  padding: 10px 0;
  height: 40px

  &::placeholder{
      color: #696b73;
  }
`;
