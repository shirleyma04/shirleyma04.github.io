import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectData";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  if (!project) return <div>Project not found</div>;

  // Highlights given keywords in text by wrapping them with <span class="highlight">
  function highlightText(text, keywords) {
    if (!keywords.length) return text;

    // Escape special regex characters in keywords
    const escapedKeywords = keywords.map((kw) =>
      kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");

    return text.split(regex).map((part, idx) =>
      keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
        <span key={idx} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  return (
    <div className="project-page">
      <button className="back-to-projects" onClick={() => navigate("/")}>
        {"< "}Back to projects
      </button>

      <div className="project-page-header">
        <h2 className="project-experience">{project.experience}</h2>
        <h1 className="project-name">{project.name}</h1>
      </div>

      <hr className="line-break" />
      <div className="section-header">
        <HeartIcon className="heart" />
        <h2>Project Overview</h2>
      </div>
      <h3>Problem Statement</h3>
      <p>{project.problem}</p>
      <h3>Provided Solution</h3>
      <p>{project.solution}</p>

      <h3>Team</h3>
      <ul>
        {project.team.map((member, idx) => (
          <li key={idx}>{member}</li>
        ))}
      </ul>

      <h3>Timeline</h3>
      <p>{project.timeline}</p>

      <h3>Technologies</h3>
      <ul>
        {project.tech.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <hr className="line-break" />
      <div className="section-header">
        <HeartIcon className="heart" />
        <h2>Product</h2>
      </div>
      <hr className="line-break" />
      <div className="section-header">
        <HeartIcon className="heart" />
        <h2>Takeaways</h2>
      </div>
      {project.takeawayTitles.map((title, idx) => (
        <div key={idx}>
          <h3>{title}</h3>
          <p>
            {highlightText(project.takeaways[idx], project.highlightedWords)}
          </p>
        </div>
      ))}
      <button className="back-to-projects" onClick={() => navigate("/")}>
        {"<"} Back to projects
      </button>
    </div>
  );
};

export default ProjectPage;
