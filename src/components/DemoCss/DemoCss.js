import React, { Component } from 'react';
// import './demoCss.css';

// gắn file css module
import style from './demoCss.module.css';

// gắn file scss vào component
import './demoCss.scss';

export default class DemoCss extends Component {
  render() {
    const inlineStyle = {
      color: 'white',
      fontSize: '35px',
    };

    return (
      <div
        className="demo_css"
        // cách sử dụng module css
        // className={style.demo_css}
      >
        <h2 style={inlineStyle}>Demo về Css trong react</h2>
        <h2 style={{ color: 'white', fontSize: '35px' }}>Demo 2 về css</h2>
      </div>
    );
  }
}
