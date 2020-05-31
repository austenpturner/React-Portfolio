import React, { Component } from 'react';
import "../../App.css";
import "./headerstyles.css";

class Banner extends Component {
  render() {
    return (
      <div id="banner">
          <h4>
              <a 
                id='logo' 
                href='#top'
              >
                Austen Turner
              </a>
          </h4>
          <nav id='links-container'>
              <ul id='nav-links'>
                  <li><a className='nav-link' href='#about'>About</a></li>
                  <li><a className='nav-link' href='#portfolio'>Portfolio</a></li>
                  <li><a className='nav-link' href='#contact'>Contact</a></li>
                  <li><a className='nav-link' href='#' target='_blank'>Resume</a></li>
              </ul>
          </nav>
          <div id='nav-symbol'>
              <div className='line' id='line1'></div>
              <div className='line' id='line2'></div>
              <div className='line' id='line3'></div>
          </div>
      </div>
    );
  }
}

export default Banner;