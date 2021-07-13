import React from "react";
let URLS = [
  "https://workout-tracker-john-mancini.herokuapp.com/",
  "https://john-mancini.github.io/weather-api/",
];
let projectData = [
  {
    title: "Workout-Tracker",
    link: "https://workout-tracker-john-mancini.herokuapp.com/",
    repo: "https://github.com/John-Mancini/workout-tracker",
    image: "workout-tracker.png",
  },
  {
    title: "Workout-Tracker",
    link: "https://workout-tracker-john-mancini.herokuapp.com/",
    repo: "https://github.com/John-Mancini/workout-tracker",
    image: "workout-tracker.png",
  },
  {
    title: "Workout-Tracker",
    link: "https://workout-tracker-john-mancini.herokuapp.com/",
    repo: "https://github.com/John-Mancini/workout-tracker",
    image: "workout-tracker.png",
  },
  {
    title: "Workout-Tracker",
    link: "https://workout-tracker-john-mancini.herokuapp.com/",
    repo: "https://github.com/John-Mancini/workout-tracker",
    image: "workout-tracker.png",
  },
  {
    title: "Weather-Api",
    link: "https://john-mancini.github.io/weather-api/",
    repo: "https://github.com/John-Mancini/weather-api",
    image: "workout-tracker.png",
  },
  {
    title: "Workout-Tracker",
    link: "https://workout-tracker-john-mancini.herokuapp.com/",
    repo: "https://github.com/John-Mancini/workout-tracker",
    image: "workout-tracker.png",
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
        <img src={props.data.image} className="card-img-top" alt="..." />
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
