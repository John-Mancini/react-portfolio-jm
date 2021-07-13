import React from "react";
import github from "./assets/githubIcon.png";
import LinkedIn from "./assets/linkedIn.png";
import Email from "./assets/email.png";
import phoneNumber from "./assets/phone.png";
import "./MyContactMe.css";

function MyContactMe() {
  return (
    <div>
      <div className="contactInfo">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/John-Mancini"
        >
          <img src={github} alt="Github" />
          Github
        </a>
      </div>
      <div className="contactInfo">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/john-mancini-49bb59163/"
        >
          <img src={LinkedIn} alt="LinkedIn" />
          LinkedIn
        </a>
      </div>
      <div className="contactInfo">
        <img src={Email} alt="Email" />
        Mancinijohn5988@gmail.com
      </div>
      <div className="contactInfo">
        <img src={phoneNumber} alt="phoneNumber" />
        (732)-555-5555
      </div>
    </div>
  );
}

export default MyContactMe;
