import React, { Component } from 'react';
import Title from "./Title";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./mainstyles.css";

window.addEventListener("hashchange", function () {
    let intViewportHeight = window.innerHeight;
    let distanceFromTop;
    if (intViewportHeight <= 667) {
        distanceFromTop = 80;
    } else if (intViewportHeight <= 736) {
        distanceFromTop = 90;
    } else if (intViewportHeight <= 812) {
        distanceFromTop = 100;
    } else if (intViewportHeight <= 1024) {
        distanceFromTop = 120;
    } else {
      distanceFromTop = 150;
    }
    window.scrollTo(window.scrollX, window.scrollY - distanceFromTop);
});

class Main extends Component {
  render() {
    return (
      <div id="main">
        <Title />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Main;