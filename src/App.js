import React, { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Logo from './components/Logo';
import Page from './components/Page';
import svg from './undraw_medicine_b1ol.svg';
import './CSS/App.css';

class App extends Component {
  state = { checked: false };

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div className='main'>
        <div className='left'>
          <Logo
            style={{
              position: 'absolute',
              width: '65px',
              height: '65px',
              left: '18px',
              top: '14px',
            }}
          />
          <div style={{ margin: 'auto', display: 'grid' }}>
            <h1>SOYEZ TRANQUILLE, ON PRENDS SOIN DE VOUS !</h1>
            <img src={svg} style={{ width: '100%', margin: '0 auto' }} />
          </div>
        </div>
        <div className='right'>
          <Page />
          <div>
            <Input />
            <div className='ligne'>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <p>
                J'accepte les <span>conditions d'utilisation</span>
              </p>
            </div>
            <div className='raw'>
              <Button />
              <div className='membre'>Déjà membres</div>
            </div>
            <Logo style={{ width: '42px', margin: '0 auto' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
