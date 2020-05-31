import React, { Component } from 'react';
import Banner from "./Banner";
import NavSlider from "./NavSlider";
import "./headerstyles.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Banner />
        {/* <NavSlider /> */}
      </div>
    );
  }
}

export default Header;