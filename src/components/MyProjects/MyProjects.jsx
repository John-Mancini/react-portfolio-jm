import React from "react";
import "./MyProjects.css";
import Bet from "./assets/bet-fullstack.png";
import Employee from "./assets/employee-directory.png";
import Note from "./assets/note-taker.png";
import Weather from "./assets/weather-api.png";
import Password from "./assets/password-generator.png";
import Workout from "./assets/workout-tracker.png";
let URLS = [
  "https://workout-tracker-john-mancini.herokuapp.com/",
  "https://john-mancini.github.io/weather-api/",
];
let projectData = [
  {
    title: "Employee Directory",
    link: "https://employee-directory-jm.herokuapp.com/",
    repo: "https://github.com/John-Mancini/employee-directory",
    image: Employee,
  },
  {
    title: "Password-Generator",
    link: "https://john-mancini.github.io/Password-Generator/",
    repo: "https://github.com/John-Mancini/Password-Generator",
    image: Password,
  },
  {
    title: "Bet Fullstack",
    link: "https://thereal-baitjet.github.io/bet-fullstack/",
    repo: "https://github.com/thereal-baitjet/bet-fullstack",
    image: Bet,
  },
  {
    title: "Weather-Api",
    link: "https://john-mancini.github.io/weather-api/",
    repo: "https://github.com/John-Mancini/weather-api",
    image: Weather,
  },
  {
    title: "Workout-Tracker",
    link: "https://workout-tracker-john-mancini.herokuapp.com/",
    repo: "https://github.com/John-Mancini/workout-tracker",
    image: Workout,
  },
  {
    title: "Notes-App",
    link: "https://note-taker-j.herokuapp.com/",
    repo: "https://github.com/John-Mancini/Notes-Appr",
    image: Note,
  },
];
function MyProjects() {
  return (
    <div className="row">
      {projectData.map((data) => {
        return <Project data={data} />;
      })}
    </div>
  );
}

function Project(props) {
  return (
    <div className="col-6">
      <div className="card">
        <img
          id="images"
          src={props.data.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <a href={props.data.link} target="_blank" className="btn btn-primary">
            Deployed Site
          </a>
          <a href={props.data.repo} target="_blank" className="btn btn-primary">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
export default MyProjects;
