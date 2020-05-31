import React, { Component } from 'react';
import "./footerstyles.css";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <ul id='social-links'>
            <li>
                <a target='_blank' href='mailto: austenpturner@msn.com'>
                  <img className='link-icon' src='assets/images/social-icons/outlook-icon.png' alt='outlook-icon'/>
                </a>
            </li>
            <li>
                <a target='_blank' href='https://www.linkedin.com/in/austenpturner/'>
                    <img className='link-icon' src='assets/images/social-icons/linkedin-icon.png' alt='linkedin-icon'/>
                </a>
            </li>
            <li>
                <a target='_blank' href='https://github.com/austenpturner'>
                    <img className='link-icon' src='assets/images/social-icons/github-icon.png' alt='github-icon'/>
                </a>
            </li>
            <li>
                <a target='_blank' href='https://codepen.io/austenpturner'>
                    <img className='link-icon' src='assets/images/social-icons/codepen-icon.png' alt='codepen-icon'/>
                </a>
            </li>
            <li>
                <a target='_blank' href='https://twitter.com/austenpturner'>
                    <img className='link-icon' src='assets/images/social-icons/twitter-icon.png' alt='twitter-icon'/>
                </a>
            </li>
          </ul>
        <p>&copy; Austen Turner 2020</p>
      </div>
    );
  }
}

export default Footer;