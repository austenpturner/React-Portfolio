import React, { Component } from 'react';
import "./headerstyles.css";

class NavSlider extends Component {
  render() {
    return (
      <nav id='slider'>
          <ul id='nav-links' className='slide-right'>
              <li><a className='nav-link' href='#about'>About</a></li>
              <li><a className='nav-link' href='#portfolio'>Portfolio</a></li>
              <li><a className='nav-link' href='#contact'>Contact</a></li>
              <li><a className='nav-link' href='#' target='_blank'>Resume</a></li>
          </ul>
      </nav>
    );
  }
}

export default NavSlider;