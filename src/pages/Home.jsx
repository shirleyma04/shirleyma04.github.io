import React from "react";
import ExperienceBlock from "../components/ExperienceBlock";
import { ReactComponent as HeadshotBackground } from "../assets/headshot-background.svg";
import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import Iridescence from "../animations/Iridescence";
import miniProjectImg from "../assets/Mini-Project/StartScreen.png";
import finnImg from "../assets/Finn/OLGAXInvestingSteps.png";
import fridge2ForkImg from "../assets/Fridge2Fork/StartScreen.png";
import languageExchangeImg from "../assets/UIUCLanguageExchange/StartScreen.png";
import "./Home.css";

const experienceData = [
  {
    title: "Publicis Sapient",
    projects: [
      {
        name: "Mini-Project",
        description: "Product Information Management System",
        image: miniProjectImg,
      },
      {
        name: "Finn",
        description: "AI Financial Assistant",
        image: finnImg,
      },
    ],
  },
  {
    title: "School Projects",
    projects: [
      {
        name: "Fridge2Fork",
        description: "Cooking Assistant",
        image: fridge2ForkImg,
      },
      {
        name: "UIUC Language Exchange",
        description: "Language Partner Matching",
        image: languageExchangeImg,
      },
    ],
  },
  {
    title: "GE Appliances",
    projects: [
      {
        name: "Data Governance & Master Data Management",
        description: "Coming Soon...",
        image: null,
      },
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          delay={0.3}
        >
          <div className="headshot-container">
            <HeadshotBackground className="headshot-bg" />
            <img
              className="headshot"
              src="/headshot-with-shadow.png"
              alt="Headshot"
            />
          </div>
        </AnimatedContent>

        <div className="home-text-container">
          <BlurText
            className="name"
            text="Shirley Ma"
            delay={55}
            animateBy="letters"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
          />
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

      {experienceData.map((exp, i) => (
        <ExperienceBlock key={i} title={exp.title} projects={exp.projects} />
      ))}
      <div>
        <h1 className="hobby-header">In my spare time, I also enjoy:</h1>
        <div className="hobby-row">
          <div className="hobby-component">
            <p className="hobby-emoji">📖</p>
            <p className="hobby-text">Reading</p>
          </div>
          <div className="hobby-component">
            <p className="hobby-emoji">🧶</p>
            <p className="hobby-text">Crocheting</p>
          </div>
          <div className="hobby-component">
            <p className="hobby-emoji">🎮</p>
            <p className="hobby-text">Gaming</p>
          </div>
        </div>
        <div className="hobby-row">
          <div className="hobby-component">
            <p className="hobby-emoji">🏊‍♀️</p>
            <p className="hobby-text">Swimming</p>
          </div>
          <div className="hobby-component">
            <p className="hobby-emoji">&</p>
          </div>
          <div className="hobby-component">
            <p className="hobby-emoji">🍪</p>
            <p className="hobby-text">Baking</p>
          </div>
        </div>
        <h1 className="thanks">Thanks for visiting!</h1>
      </div>
    </div>
  );
}
