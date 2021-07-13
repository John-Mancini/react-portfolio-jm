import React from "react";
import headShot from "./assets/headshot.png";
import "./MyHome.css";

function MyHome() {
  return (
    <div>
      <img id="headShot" src={headShot} alt="headShot" />
    </div>
  );
}

export default MyHome;
