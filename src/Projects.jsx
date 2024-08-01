import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    link: "https://github.com/username/project-one"
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    link: "https://github.com/username/project-two"
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
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
