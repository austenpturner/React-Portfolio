import React, { Component } from 'react';
import Banner from "./Banner";
import NavSlider from "./NavSlider";
import "./headerstyles.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderDown: false
    };
  }

  handleNavSlide() {
    if (this.state.sliderDown) {
      this.setState({ sliderDown: false});
    } else {
      this.setState({ sliderDown: true });
    }
  }

  render() {
    return (
      <div id="header">
        <Banner 
          handleNavSlide={this.handleNavSlide.bind(this)} 
          sliderDown={this.state.sliderDown}
        />
        <NavSlider 
          handleNavSlide={this.handleNavSlide.bind(this)} 
          sliderDown={this.state.sliderDown}
        />
      </div>
    );
  }
}

export default Header;