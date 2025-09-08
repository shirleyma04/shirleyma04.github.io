import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../data/projectData";
import { ReactComponent as HeartIcon } from "../assets/heart.svg";
import BlurText from "../animations/BlurText";
import AnimatedContent from "../animations/AnimatedContent";
import "./ProjectPage.css";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    // Clear any hash from the URL first
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // Try multiple methods to ensure scrolling works
    const scrollToTop = () => {
      // Method 1: Simple scrollTo
      window.scrollTo(0, 0);

      // Method 2: Scroll with options
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });

      // Method 3: Scroll on document element
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }

      // Method 4: Scroll on body element
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Execute immediately
    scrollToTop();

    // Execute again after a small delay to handle any async rendering
    const timer1 = setTimeout(scrollToTop, 10);
    const timer2 = setTimeout(scrollToTop, 100);
    const timer3 = setTimeout(scrollToTop, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [slug]);

  if (!project)
    return (
      <div className="coming-soon">
        <BlurText
          className="blur-text"
          text="Project details coming soon..."
          aria-label="Project details coming soon"
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
            className="back-button inherit-cursor"
            onClick={() => navigate("/")}
            aria-label="Back to projects"
          >
            &larr;&nbsp;Back to projects
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
      {/* Sidebar TOC
      <nav className="toc">
        <h3 className="toc-title">Table Of Contents</h3>
        <hr className="line-decoration" />
        <ul className="list">
          <li>
            <a className="toc-link inherit-cursor" href="#overview">
              Overview
            </a>
          </li>
          <li>
            <a className="toc-link inherit-cursor" href="#details">
              Details
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
          className="back-button toc inherit-cursor"
          aria-label="Back to projects"
          onClick={() => navigate("/")}
        >
          &larr;&nbsp;Back to Projects
        </button>
      </nav> */}

      {/* Main content */}

      <div className="project-page">
        <button
          className="back-button inherit-cursor"
          onClick={() => navigate("/")}
          aria-label="Back to projects"
        >
          {"←"}&nbsp;Back To Projects
        </button>
        <div className="project-page-header">
          <div className="project-page-header-text">
            <h2 className="project-experience">{project.experience}</h2>
            <h1 className="project-name">{project.name}</h1>
          </div>
        </div>

        <hr className="line-break" />
        <div className="section-header" id="overview">
          {/* <HeartIcon className="heart" /> */}
          <h2 className="section-header-text">Overview</h2>
        </div>
        <h3 className="text-header">Problem Statement</h3>
        <p className="text">{project.problem}</p>
        <h3 className="text-header">Provided Solution</h3>
        <p className="text">{project.solution}</p>

        <hr className="line-break" />
        <div className="section-header" id="details">
          {/* <HeartIcon className="heart" /> */}
          <h2 className="section-header-text">Details</h2>
        </div>
        <h3>Team</h3>
        <ul>
          {project.team.map((member, idx) => (
            <li key={idx}>{member}</li>
          ))}
        </ul>

        <h3 className="text-header">Timeline</h3>
        <p className="text">{project.timeline}</p>

        <h3 className="text-header">Technologies</h3>
        <ul className="list">
          {project.tech.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>

        <hr className="line-break" />
        <div className="section-header" id="product">
          {/* <HeartIcon className="heart" /> */}
          <h2 className="section-header-text">Product</h2>
        </div>

        <div className="media-grid">
          {project.media.map((item, idx) =>
            item.src.endsWith(".mp4") ? (
              <video
                key={idx}
                src={item.src}
                autoPlay
                loop
                playsInline
                controls
                muted
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
          {/* <HeartIcon className="heart" /> */}
          <h2 className="section-header-text">Takeaways</h2>
        </div>
        {project.takeawayTitles.map((title, idx) => (
          <div key={idx}>
            <h3 className="text-header">{title}</h3>
            <p className="text">
              {highlightText(
                project.takeaways[idx],
                project.highlightedWords[idx]
              )}
            </p>
          </div>
        ))}
        <button
          className="back-button mobile inherit-cursor"
          aria-label="Back to projects"
          onClick={() => navigate("/")}
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
