import React from "react";
import headShot from "./assets/headshot.png";
import "./MyHome.css";
import Image from "react-bootstrap/Image";

function MyHome() {
  return (
    <div>
      <Image id="headShot" src={headShot} alt="headShot" fluid />
    </div>
  );
}

export default MyHome;
