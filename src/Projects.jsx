import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "CarrotOS",
    description: `CarrotOS is my "magnum opus", if you will. An OS, based purely on AI. Click on me to learn more!`,
    link: "https://github.com/username/project-one",
    image: "src/carrotos.webp", // Relative path to the image file
    onGithub: 0,
  },
  {
    title: "Persist",
    description: `Persist is the annoying task manager that forces you to do your tasks. It will hover over all your windows, and it will MAKE you do your tasks.`,
    link: "https://github.com/username/project-two",
    image: "src/persist.webp", // Relative path to the image file
    onGithub: 1,
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="Projects">
      <header className="projects-header">
        <h1 className="projects-title">PROJECTS</h1>
      </header>
      <main className="projects-main">
        <div className="frosted-bg">
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={`${project.title} logo`} />
                </div>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  {project.onGithub === 1 && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
