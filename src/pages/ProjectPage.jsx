import { useParams } from "react-router-dom";
import projects from "../data/projectData";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

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
      <h2>{project.experience}</h2>
      <h1>{project.name}</h1>

      <h3>Problem</h3>
      <p>{project.problem}</p>

      <h3>Solution</h3>
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

      <h3>Takeaways</h3>
      {project.takeawayTitles.map((title, idx) => (
        <div key={idx}>
          <h4>{title}</h4>
          <p>
            {highlightText(project.takeaways[idx], project.highlightedWords)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
