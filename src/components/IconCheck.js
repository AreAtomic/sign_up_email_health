import React from 'react';

export default class IconCheck extends React.Component {
  render() {
    return (
      <svg style={Styles.svg} viewBox='0 0 22 22'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g stroke='#51AFAD' strokeWidth='1' fill='#51AFAD'>
            <rect
              id='Rectangle'
              x='1.5'
              y='1.5'
              width='21'
              height='21'
              rx='1'
            />
          </g>
          <g transform='translate(-1.000000, -2.000000)' fill='#303451'>
            <polygon points='20.6465116 4 8.7255814 15.5061728 3.35348837 10.3209877 1 12.5925926 7.54883721 18.9135802 8.7255814 20 9.90232558 18.9135802 23 6.27160494' />
          </g>
        </g>
      </svg>
    );
  }
}

const Styles = {
  svg: {
    width: '24px',
    height: '24px',
  },
};
