import React, { Component } from 'react';
import Title from "./Title";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "./mainstyles.css";

window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 60);
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