import React, { Component } from 'react';
import AOS from "aos";
import "./mainstyles.css";

class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

  render() {
    return (
      <div id="about">
          <h2 data-aos='fade-up'>About Me</h2>
          <div id="text-container">
              <p data-aos='fade-up'> 
                  I'm Austen, a web developer based in Seattle, WA. I build and design websites and apps. My projects combine a polished and responsive front-end UI with an efficient back-end server. I take pride in writing clean, organized and well-documented code that lends to user-friendly applications. 
              </p>
              <p data-aos='fade-up'>
                  My education includes University of Washington Full-Stack Coding Bootcamp and a Bachelor of Science in Psychology. I have experience in customer service, cognitive psychology and collaborating with a web development team. Driven by a desire to continually become a better programmer, I love learning new languages and technologies.
              </p>  
              <h4 data-aos='fade-up'>Languages and technologies I've been working with include:</h4>
              <ul data-aos='fade-up'> 
                  <li>JavaScript ES6</li>
                  <li>CSS, Sass and Bootstrap</li>
                  <li>Node.js and Express</li>
                  <li>MySQL and MongoDB</li>
                  <li>React and JSX</li>
                  <li>GitHub and Heroku</li>
              </ul>
          </div>
      </div>
    );
  }
}

export default About;