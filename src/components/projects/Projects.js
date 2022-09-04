import React from 'react'
import './Projects.css'
import Card from "./Card"
import ProjectsAPI from "./ProjectsAPI.js"


const Projects = () => {
  
  const ProjectsData = ProjectsAPI();
  const title_name = "< Projects />"
  return (
    <>
     <section className='Prj' id='project'>
          <h1 className='title'>{title_name}</h1>

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
          <a className="btn_shadow" href="https://github.com/dontdude"><span>View All </span>
              <i class="fas fa-chevron-right"></i>
          </a>
      </section>
    </>
  )
}

export default Projects