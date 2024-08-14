import React from 'react';
import '../components-css/Projects.css';
import ProjectsData from '../data/ProjectsData.json';

function Projects() {
  return (
    <section className="projects" id="projects">
          <h2 className="projects-header">
          My <span>Projects</span>
          </h2>
      <div className="projects-container">
        {ProjectsData.ProjectsData.map((project, index) => {
          return (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className='stack'><span>TECHNOLOGIES: </span>{project.stack}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={project.github} target="_blank" rel="noreferrer">View Code</a>
                </div>
              </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
