import React from "react";
import "./Header.css";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as ResumeIcon } from "../assets/resume.svg";

export default function Header() {
  return (
    <div className="header-bar">
      <div className="header-component">
        <a
          className="header-link-wrapper"
          href="Ma_Shirley_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-links">Resume</span>
          <ResumeIcon className="header-icons" />
        </a>
      </div>
      <div className="header-component">
        <a
          className="header-link-wrapper"
          href="https://github.com/shirleyma04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-links">Github</span>
          <GitHubIcon className="header-icons" />
        </a>
      </div>
      <div className="header-component">
        <a
          className="header-link-wrapper"
          href="https://www.linkedin.com/in/shirleyma2004/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-links">LinkedIn</span>
          <LinkedInIcon className="header-icons" />
        </a>
      </div>
      <div className="header-component">
        <a
          className="header-link-wrapper"
          href="mailto:shirleyma2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-links">Email</span>
          <EmailIcon className="header-icons" />
        </a>
      </div>
    </div>
  );
}
