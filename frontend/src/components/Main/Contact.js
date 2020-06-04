import React, { Component } from 'react';
import "./mainstyles.css";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
          <h2 data-aos='fade-up'>Contact Me</h2>
          <div id="content-container">
              <h4 data-aos='fade-up'>Let's connect!</h4>
              <p data-aos='fade-up'>I am currently looking for new projects to work on and would love to collaborate.</p>
              <p data-aos='fade-up'>Please reach out with any comments, questions, or just to say hi.</p>
              <button data-aos='fade-up'>
                  <a href='contact.html' target='_blank'>Send me a message</a>
              </button>
          </div>
      </div>
    );
  }
}

export default Contact;