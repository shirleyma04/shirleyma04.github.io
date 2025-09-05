import React from "react";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "../animations/SpotlightCard";
import ScrollFloat from "../animations/ScrollFloat";
import "./ExperienceBlock.css";

const ExperienceBlock = ({ logo, title, projects }) => {
  const navigate = useNavigate();

  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <ScrollFloat
      containerClassName="experience-block"
      animationDuration={1}
      ease="back.inOut(2)"
      scrollStart="center bottom+=50%"
      scrollEnd="bottom bottom-=40%"
      stagger={0.03}
    >
      <div className="experience-header">
        {logo ? (
          <img src={logo} alt="Company Logo" className="experience-logo" />
        ) : null}
        <div className="experience-title">{title}</div>
      </div>
      <div className={`project-row project-count-${projects.length}`}>
        {projects.map((project, idx) => (
          <button
            key={idx}
            className="project-card inherit-cursor"
            aria-label={`Click to open the project ${project.name} ${project.description}`}
            onClick={() => {
              navigate(`/projects/${slugify(project.name)}`);
            }}
            style={{
              "--project-bg": project.image ? `url(${project.image})` : "none",
            }}
          >
            <SpotlightCard
              className="spotlight-overlay"
              spotlightColor="rgba(206, 62, 120, 0.2)"
            >
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              {/* <button
                className="circle-button inherit-cursor"
                onClick={() => {
                  navigate(`/projects/${slugify(project.name)}`);
                }}
              >
                {">"}
              </button> */}
            </SpotlightCard>
          </button>
        ))}
      </div>
    </>
  );

  if (isMobile) {
    return <div className="experience-block">{content}</div>; // render static content on mobile
  }

  return (
    <ScrollFloat
      containerClassName="experience-block"
      animationDuration={1}
      ease="back.inOut(2)"
      scrollStart="center bottom+=50%"
      scrollEnd="bottom bottom-=40%"
      stagger={0.03}
    >
      {content}
    </ScrollFloat>
  );
};

export default ExperienceBlock;
