import React, { Component } from 'react';
import "./mainstyles.css";

const projects = [
  {
    title: "Weather Dashboard",
    description: "weather-dashboard",
    githubLink: "https://github.com/austenpturner/weather-dashboard",
    deployedSite: "https://austenpturner.github.io/weather-dashboard/"
  },
  {
    title: "Password Generator",
    description: "password-generator",
    githubLink: "https://github.com/austenpturner/password-generator",
    deployedSite: "https://austenpturner.github.io/password-generator/"
  },
  {
    title: "Tee Time",
    description: "tee-time",
    githubLink: "https://github.com/E-Bossler/tee-time",
    deployedSite: "https://tee-time-seattle.herokuapp.com/"
  },
  {
    title: "Scrabble Dabble",
    description: "scrabble-dabble",
    githubLink: "https://github.com/dustinjack99/ScrabbleDabble",
    deployedSite: "https://dustinjack99.github.io/ScrabbleDabble/"
  },
  {
    title: "Work Day Scheduler",
    description: "day-planner",
    githubLink: "https://github.com/austenpturner/day-planner",
    deployedSite: "https://austenpturner.github.io/day-planner/"
  },
  {
    title: "Eat-Da-Burger",
    description: "burger-app",
    githubLink: "https://github.com/austenpturner/eat-da-burger",
    deployedSite: "https://devour-burgers-hw.herokuapp.com/"
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
            const githubLink = project.githubLink;
            const deployedSite = project.deployedSite;
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
                            <a href={githubLink} target='_blank'>View on GitHub</a>
                            <a href={deployedSite} target='_blank'>Visit Deployed Site</a>
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