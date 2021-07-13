import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">John Mancini</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/aboutMe">About Me</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contactMe">Contact Me</Nav.Link>
          <Button
            variant="outline-info"
            target="_blank"
            href="https://docs.google.com/document/d/10zbbvnOojTSm1y7oOEqL77rxKF468-4wC3hJ2AUukls/edit?usp=sharing"
          >
            Resume
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}

export default MyNavbar;
