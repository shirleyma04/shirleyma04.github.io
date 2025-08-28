import React from "react";
import "./Header.css";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as ResumeIcon } from "../assets/resume.svg";

export default function Header() {
  return (
    <div className="header-bar">
      <ul className="glow-menu">
        <li>
          <a
            href="Ma_Shirley_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Resume in new tab"
          >
            <span className="icon">
              <ResumeIcon />
            </span>
            <span className="title inherit-cursor">Resume</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/shirleyma04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub in new tab"
          >
            <span className="icon">
              <GitHubIcon />
            </span>
            <span className="title inherit-cursor">Github</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/shirleyma2004/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn in new tab"
          >
            <span className="icon">
              <LinkedInIcon />
            </span>
            <span className="title inherit-cursor">LinkedIn</span>
          </a>
        </li>

        <li>
          <a
            href="mailto:shirleyma2004@gmail.com"
            aria-label="Send email to Shirley"
          >
            <span className="icon">
              <EmailIcon />
            </span>
            <span className="title inherit-cursor">Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
