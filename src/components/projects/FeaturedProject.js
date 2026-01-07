import React, { useState, useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';

const FeaturedProject = ({ project }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isZoomed) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [isZoomed]);

  return (
    <div className='Featured-card'>
      <Zoom bottom>
        <div className='Featured-content'>
          <div className='Featured-left'>
            <div className='Featured-img-container' onClick={toggleZoom}>
                <img src={project.img} alt={project.title} className='Featured-img' />
                <div className='img-overlay'>
                    <i className='fas fa-search-plus'></i> View Architecture
                </div>
            </div>
          </div>
          <div className='Featured-right'>
            <div className='Featured-header'>
                <span className='Featured-category'>{project.category}</span>
                <h2>{project.title}</h2>
            </div>
            
            <p className='Featured-desc'>{project.description}</p>
            
            <ul className='Featured-features'>
                {project.features.map((feature, idx) => (
                    <li key={idx}><i className='fas fa-check-circle'></i> {feature}</li>
                ))}
            </ul>

            <div className='Featured-tech'>
                {project.techStack.map((tech, idx) => (
                    <span key={idx} className='tech-tag'>{tech}</span>
                ))}
            </div>

            <div className='Featured-actions'>
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className='btn_shadow'>
                        <i className='fab fa-github'></i> Code
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className='btn_shadow'>
                        <i className='fas fa-external-link-alt'></i> Live
                    </a>
                )}
            </div>
          </div>
        </div>
      </Zoom>

      {/* Image Modal */}
      {isZoomed && (
        <div className='modal' onClick={toggleZoom}>
            <div className='overlay'></div>
            <div className='modal-content-img'>
                <img src={project.img} alt={project.title} />
                <button className='close-modal btn_shadow' onClick={toggleZoom}>
                    <i className='fas fa-times'></i>
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProject;
