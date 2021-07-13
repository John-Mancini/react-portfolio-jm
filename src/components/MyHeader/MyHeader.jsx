import React from "react";
import "./MyHeader.css";
import Sun from "./assets/sun.png";
import Moon from "./assets/moon.png";

function MyHeader() {
  let day = false;
  const nightMode = () => {
    document.body.classList.remove("day");
    document.body.classList.add("night");
    day = true;
  };
  const dayMode = () => {
    if (day) {
      document.body.classList.remove("night");
      document.body.classList.add("day");
      day = false;
    }
  };
  return (
    <div className="header">
      <span>
        <img className="sun" src={Sun} onClick={dayMode} />
      </span>
      <span>
        <h1>John Mancini</h1>
      </span>
      <span>
        <img src={Moon} onClick={nightMode} />
      </span>
    </div>
  );
}

export default MyHeader;
