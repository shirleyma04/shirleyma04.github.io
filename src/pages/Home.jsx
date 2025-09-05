import { useState, React } from "react";
import ExperienceBlock from "../components/ExperienceBlock";
import { ReactComponent as HeadshotBackground } from "../assets/headshot-background.svg";
import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import miniProjectImg from "../assets/Mini-Project/StartScreen.png";
import finnImg from "../assets/Finn/OLGAXInvestingSteps.png";
import fridge2ForkImg from "../assets/Fridge2Fork/StartScreen.png";
import languageExchangeImg from "../assets/UIUCLanguageExchange/StartScreen.png";
import psLogo from "../assets/ps-logo.png";
import uiucLogo from "../assets/uiuc-logo.png";
import hobbies from "../data/hobbyData";
import HobbyPopup from "../components/HobbyPopup";
import "./Home.css";

const experienceData = [
  {
    title: "Publicis Sapient",
    logo: psLogo,
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
    logo: uiucLogo,
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
  // {
  //   title: "GE Appliances",
  //   projects: [
  //     {
  //       name: "Data Governance & Master Data Management",
  //       description: "Coming Soon...",
  //       image: null,
  //     },
  //   ],
  // },
];

export default function Home() {
  const [selectedHobby, setSelectedHobby] = useState(null);

  return (
    <div>
      <div className="home-container">
        <div className="home-top">
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
            {/* <div className="headshot-container"> */}
            {/* <HeadshotBackground className="headshot-bg" />
              <img
                className="headshot"
                src="/headshot-with-shadow.png"
                alt="Headshot"
              />
            </div> */}
          </AnimatedContent>
          <div className="home-text-container">
            <h1 className="name">
              <BlurText
                className="name"
                text="Hi, I'm Shirley!"
                delay={55}
                animateBy="letters"
                direction="top"
              />
            </h1>
            <h2 className="subtitle">Software Engineer & Student</h2>
            <p className="bio">
              I'm a{" "}
              <strong className="bold-text">
                Computer Science + Advertising
              </strong>{" "}
              major at the University of Illinois at Urbana-Champaign,
              graduating May 2026. I combine{" "}
              <strong className="bold-text">technology and creativity</strong>{" "}
              to design accessible solutions and turn ideas into reality.
            </p>
          </div>
          {/* <div
            className="scroll-indicator inherit-cursor"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            ⬇ View projects ⬇
          </div> */}
        </div>
      </div>

      {experienceData.map((exp, i) => (
        <ExperienceBlock
          key={i}
          logo={exp.logo}
          title={exp.title}
          projects={exp.projects}
        />
      ))}

      <div>
        <div className="hobby-section">
          <h1 className="hobby-header">In my spare time, I also enjoy:</h1>

          {!selectedHobby ? (
            <>
              {/* Top row */}
              <div className="hobby-row">
                {hobbies.slice(0, 3).map((hobby, idx) => (
                  <div
                    key={idx}
                    className="hobby-component inherit-cursor"
                    onClick={() => setSelectedHobby(hobby)}
                  >
                    <p className="hobby-emoji">{hobby.emoji}</p>
                    <p className="hobby-text">{hobby.title}</p>
                  </div>
                ))}
              </div>

              {/* Bottom row */}
              <div className="hobby-row">
                {/* First hobby */}
                <div
                  className="hobby-component inherit-cursor"
                  onClick={() => setSelectedHobby(hobbies[3])}
                >
                  <p className="hobby-emoji">{hobbies[3].emoji}</p>
                  <p className="hobby-text">{hobbies[3].title}</p>
                </div>

                {/* Middle & */}
                <div>
                  <p className="hobby-emoji">&</p>
                </div>

                {/* Last hobby */}
                <div
                  className="hobby-component inherit-cursor"
                  onClick={() => setSelectedHobby(hobbies[4])}
                >
                  <p className="hobby-emoji">{hobbies[4].emoji}</p>
                  <p className="hobby-text">{hobbies[4].title}</p>
                </div>
              </div>
            </>
          ) : (
            <HobbyPopup
              hobby={selectedHobby}
              onClose={() => setSelectedHobby(null)}
            />
          )}

          <h1 className="thanks">Thanks for visiting!</h1>
        </div>
      </div>
    </div>
  );
}
