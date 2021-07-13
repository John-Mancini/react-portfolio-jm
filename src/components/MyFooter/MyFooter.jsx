import React from "react";
import github from "./assets/githubIcon.png";
import LinkedIn from "./assets/linkedIn.png";
import Email from "./assets/email.png";
import phoneNumber from "./assets/phone.png";
import "./MyFooter.css";

function MyFooter() {
  return (
    <div className="footer">
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/John-Mancini"
        >
          <img src={github} alt="Github" />
          Github
        </a>
      </span>
      <span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/john-mancini-49bb59163/"
        >
          <img src={LinkedIn} alt="LinkedIn" />
          LinkedIn
        </a>
      </span>
      <span>
        <img src={Email} alt="Email" />
        Mancinijohn5988@gmail.com
      </span>
      <span>
        <img src={phoneNumber} alt="phoneNumber" />
        (732)-555-5555
      </span>
    </div>
  );
}

export default MyFooter;
