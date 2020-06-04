import React, { Component } from 'react';
import "./headerstyles.css";
import Resume from "../Documents/Austen-Turner-Resume.pdf";

class NavSlider extends Component {
  render() {
    return (
      <nav 
          id='slider' 
          className={this.props.sliderDown ? "slide-down" : "slide-up"}
      >
          <ul 
              id='slider-links' 
              className='slide-right'
          >
              <li>
                  <a 
                      className='slider-link' 
                      href='#about'
                      onClick={this.props.handleNavSlide}
                  >
                      About
                  </a>
              </li>
              <li>
                  <a 
                      className='slider-link' 
                      href='#portfolio'
                      onClick={this.props.handleNavSlide}
                  >
                      Portfolio
                  </a>
              </li>
              <li>
                  <a 
                      className='slider-link' 
                      href='#contact'
                      onClick={this.props.handleNavSlide}
                  >
                      Contact
                  </a>
              </li>
              <li>
                  <a 
                      className='slider-link' 
                      href={Resume} 
                      target='_blank'
                      onClick={this.props.handleNavSlide}
                  >
                      Resume
                  </a>
              </li>
          </ul>
      </nav>
    );
  }
}

export default NavSlider;