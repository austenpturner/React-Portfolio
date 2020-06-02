import React, { Component } from 'react';
import "./mainstyles.css";

class Title extends Component {
  render() {
    return (
      <div id="title">
          <div id="headers-container">
              <h1>Hi, I'm Austen</h1>
              <h4>A full-stack web developer</h4>
          </div>
          <div className='chevron-container'>
              <a href='#about'>
                  <i className='fas fa-chevron-down fa-3x bounce'></i>
              </a>
          </div>
      </div>
    );
  }
}

export default Title;