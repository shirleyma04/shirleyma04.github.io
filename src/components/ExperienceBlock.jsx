import React from "react";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "../animations/SpotlightCard";
import ScrollFloat from "../animations/ScrollFloat";

import "./ExperienceBlock.css";

const ExperienceBlock = ({ title, projects }) => {
  const navigate = useNavigate();

  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <div className="experience-block">
      <ScrollFloat
        containerClassName="experience-title"
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        {title}
      </ScrollFloat>
      <div className={`project-row project-count-${projects.length}`}>
        {projects.map((project, idx) => (
          <SpotlightCard
            key={idx}
            className="project-card"
            spotlightColor="rgba(206, 62, 120, 0.2)"
          >
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <button
              className="circle-button"
              onClick={() => {
                navigate(`/projects/${slugify(project.name)}`);
              }}
            >
              {">"}
            </button>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBlock;
