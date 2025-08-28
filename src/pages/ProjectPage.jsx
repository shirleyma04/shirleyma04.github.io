import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projectData";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  if (!project)
    return (
      <div className="coming-soon">
        <BlurText
          className="blur-text"
          text="Project details coming soon..."
          delay={55}
          animateBy="letters"
          direction="top"
        />
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.7}
        >
          <button
            className="back-to-projects inherit-cursor"
            onClick={() => navigate("/")}
          >
            {"<"}&nbsp;Back to projects
          </button>
        </AnimatedContent>
      </div>
    );

  function highlightText(text, keywords) {
    if (!keywords.length) return text;
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
    <div className="project-page-container">
      {/* Sidebar TOC */}
      <nav className="toc">
        <h3 className="toc-title">Table Of Contents</h3>
        <hr className="line-decoration" />
        <ul>
          <li>
            <a className="toc-link inherit-cursor" href="#overview">
              Project Overview
            </a>
          </li>
          <li>
            <a className="toc-link inherit-cursor" href="#product">
              Product
            </a>
          </li>
          <li>
            <a className="toc-link inherit-cursor" href="#takeaways">
              Takeaways
            </a>
          </li>
        </ul>
        <hr className="line-decoration" />
        <button
          className="back-button inherit-cursor"
          onClick={() => navigate("/")}
        >
          {"←"}&nbsp;Back To Projects
        </button>
      </nav>

      {/* Main content */}
      <div className="project-page">
        <div className="project-page-header">
          <div className="project-page-header-text">
            <h2 className="project-experience">{project.experience}</h2>
            <h1 className="project-name">{project.name}</h1>
          </div>
        </div>

        <hr className="line-break" />
        <div className="section-header" id="overview">
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
        <div className="section-header" id="product">
          <HeartIcon className="heart" />
          <h2>Product</h2>
        </div>

        <div className="media-grid">
          {project.media.map((item, idx) =>
            item.src.endsWith(".mp4") ? (
              <video
                key={idx}
                src={item.src}
                autoPlay
                loop
                playsInlines
                controls
                className={`media-item ${
                  item.type === "phone" ? "phone-media" : "web-media"
                }`}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support this video.
              </video>
            ) : (
              <img
                key={idx}
                src={item.src}
                alt={`Project media ${idx + 1}`}
                className={`media-item ${
                  item.type === "phone" ? "phone-media" : "web-media"
                }`}
              />
            )
          )}
        </div>

        <hr className="line-break" />
        <div className="section-header" id="takeaways">
          <HeartIcon className="heart" />
          <h2>Takeaways</h2>
        </div>
        {project.takeawayTitles.map((title, idx) => (
          <div key={idx}>
            <h3>{title}</h3>
            <p>
              {highlightText(
                project.takeaways[idx],
                project.highlightedWords[idx]
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
