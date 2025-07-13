import React from "react";
import { ReactComponent as HeadshotBackground } from "../assets/headshot-background.svg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="headshot-container">
          <HeadshotBackground className="headshot-bg" />
          <img
            className="headshot"
            src="/headshot-with-shadow.png"
            alt="Headshot"
          />
        </div>
        <div className="home-text-container">
          <h1 className="name">Shirley Ma</h1>
          <h2 className="subtitle">Software Engineer & Student</h2>
          <p className="bio">
            Welcome! I'm a{" "}
            <strong className="bold-text">
              Computer Science + Advertising
            </strong>{" "}
            major at the University of Illinois at Urbana-Champaign, graduating
            in May 2026. I’m passionate about combining technology and
            creativity to craft{" "}
            <strong className="bold-text">accessible designs</strong> and bring
            ideas to life through creative coding. Below are some of the
            projects I have worked on.
          </p>
        </div>
      </div>
    </div>
  );
}
