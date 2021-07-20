import React from "react";
import { NavLink, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./MyNavbar.css";
import Container from "react-bootstrap/Container";
function MyNavbar() {
  return (
    <>
      <nav id="navbar" bg="dark" variant="dark">
        {/* <a href="#home">John Mancini</a> */}

        <NavLink className="nav-links" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-links" to="/aboutMe">
          About Me
        </NavLink>
        <NavLink className="nav-links" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-links" to="/contactMe">
          Contact Me
        </NavLink>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/10zbbvnOojTSm1y7oOEqL77rxKF468-4wC3hJ2AUukls/edit?usp=sharing"
        >
          <button className="nav-links" id="resume">
            Resume
          </button>
        </a>
      </nav>
    </>
  );
}

export default MyNavbar;
