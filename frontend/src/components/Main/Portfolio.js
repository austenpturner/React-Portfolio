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
              return (
                <h4
                    key={index}
                >
                    {project.title}
                </h4>
              );
            })}
          </div>
      </div>
    );
  }
}

export default Portfolio;