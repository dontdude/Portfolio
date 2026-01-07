import React from 'react'
import './Projects.css'
import Card from "./Card"
import ProjectsAPI from "./ProjectsAPI.js"
import FeaturedProject from './FeaturedProject'
import FeaturedProjectsData from './projectsData'

const Projects = () => {
  const ProjectsData = ProjectsAPI();

  return (
    <>
      <section className='Prj' id='project'>
          <h1 className='title'>{"< Featured Projects />"}</h1>
          
          {/* Render Featured Projects (Goxec, NyaySetu) */}
          {FeaturedProjectsData.map((project) => (
             <FeaturedProject key={project.id} project={project} />
          ))}

          {/* GitHub Repos Section */}
          <h2 style={{marginTop: '50px', marginBottom: '20px', fontSize: '1.5rem', color: 'var(--text-color)'}}>
              Other Noteworthy Projects
          </h2>

            <div className='Prj-container'>
              {ProjectsData.map((project, index) => {
                return <Card 
                        key={index} 
                        title={project.name} 
                        details={project.description} 
                        time={project.created_at} 
                        link={project.svn_url} 
                        stars={project.stargazers_count} 
                        clone={project.clone_url} 
                        fork={project.forks}
                        lang={project.language}
                        hostedUrl={project.homepage}
                        />
              })}
            </div>
          <a target="_blank" rel="noopener noreferrer" className="btn_shadow" href="https://github.com/dontdude"><span>View All on GitHub </span>
              <i className="fas fa-chevron-right"></i>
          </a>
      </section>
    </>
  )
}

export default Projects