import React, { Component } from 'react';
import "./mainstyles.css";

const projects = [
  {
    title: "Weather Dashboard",
    description: "weather-dashboard"
  },
  {
    title: "Password Generator",
    description: "password-generator"
  },
  {
    title: "Tee Time",
    description: "tee-time"
  },
  {
    title: "Scrabble Dabble",
    description: "scrabble-dabble"
  },
  {
    title: "Work Day Scheduler",
    description: "day-planner"
  },
  {
    title: "Eat-Da-Burger",
    description: "burger-app"
  }
]

class Portfolio extends Component {

  render() {
    return (
      <div id="portfolio">
        <h2>Portfolio</h2>
        <div id="grid">
        {projects.map((project, index) => {
            const source = `/assets/images/portfolio-images/${project.description}.jpg`;
            return (
                <div className="project">
                    <h4 key={index}>
                        {project.title}
                    </h4>
                    <div className="image-container">
                        <img src={source} alt={project.description}/>
                        <div className='links'>
                            {/* <a className='icon-link' href='https://github.com/austenpturner/PlaylistDB' target='_blank'>
                                <img id='github-icon' src='./assets/images/social-icons/github-white.svg' />
                            </a>
                            <a className='icon-link' href='https://github.com/austenpturner/PlaylistDB' target='_blank'>
                                <img id='website-icon' src='./assets/images/social-icons/website-white.png' />
                            </a> */}
                            {/* <button> */}
                                <a href='https://github.com/austenpturner/PlaylistDB' target='_blank'>View on GitHub</a>
                            {/* </button> */}
                            {/* <button> */}
                                <a href='https://github.com/austenpturner/PlaylistDB' target='_blank'>Visit Deployed Site</a>
                            {/* </button> */}
                        </div>
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;