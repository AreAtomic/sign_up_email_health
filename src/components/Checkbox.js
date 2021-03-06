import React from 'react';
import IconCheck from './IconCheck';
import IconUnchecked from './IconUnchecked';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };

    this.icon = this.icon.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  icon() {
    return this.state.checked ? <IconCheck /> : <IconUnchecked />;
  }

  toggle(event) {
    event.preventDefault();
    this.setState(function (state, props) {
      return {
        checked: !state.checked,
      };
    });
  }

  render() {
    return (
      <button style={Styles.button} onClick={this.toggle}>
        <div style={Styles.check}>{this.icon()}</div>

        <div style={Styles.content}>{this.props.children}</div>
      </button>
    );
  }
}

const Styles = {
  button: {
    background: 'transparent',
    border: '0',
    margin: '0 10px 0 0',
    fontSize: '1rem',
    display: 'flex',
    outline: '0',
    color: '#9B9B9B',
    cursor: 'pointer',
    textAlign: 'left',
  },

  check: {
    marginRight: '0',
  },

  content: {
    paddingTop: '0.2rem',
    fontSize: '0.9rem',
    fontWeight: '100',
    lineHeight: '1.25rem',
  },
};
