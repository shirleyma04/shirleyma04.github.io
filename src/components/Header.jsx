import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as GitHubIcon } from "../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as ResumeIcon } from "../assets/resume.svg";

export default function Header() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("shirleyma2004@gmail.com");
    setCopied(true);

    // Reset after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="header-bar">
      <ul className="glow-menu">
        <li>
          <a
            href={`${process.env.PUBLIC_URL}/Ma_Shirley_Resume.pdf`}
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
          <a onClick={handleCopy} aria-label="Copy Shirley’s email">
            <span className="icon">
              <EmailIcon />
            </span>
            <span className="title inherit-cursor">
              {copied ? "Copied!" : "Email"}
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
