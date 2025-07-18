import React from "react";
import "./ExperienceBlock.css";

const ExperienceBlock = ({ title, projects }) => {
  return (
    <div className="experience-block">
      <h3 className="experience-title">{title}</h3>
      <div className={`project-row project-count-${projects.length}`}>
        {projects.map((project, idx) => (
          <div key={idx} className="project-block">
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBlock;
