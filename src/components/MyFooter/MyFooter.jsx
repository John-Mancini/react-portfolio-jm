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
        <a href="https://github.com/John-Mancini">
          <img className="footerLink" src={github} alt="Github" />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/john-mancini-49bb59163/">
          <img className="footerLink" src={LinkedIn} alt="LinkedIn" />
        </a>
      </span>
    </div>
  );
}

export default MyFooter;
