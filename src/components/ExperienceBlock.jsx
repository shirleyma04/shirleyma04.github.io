import React from "react";
import { useNavigate } from "react-router-dom";
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
      <h3 className="experience-title">{title}</h3>
      <div className={`project-row project-count-${projects.length}`}>
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBlock;
