import React, { useState, useEffect } from 'react';
import "./Header.css";
import Music from "../common/Music";

const Header = ({ theme, toggleTheme }) => {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     <header className={scrolled ? "header active" : "header"}>
      <div className="container d_flex">
       <div className="logo">
         <h2>
           <a href="#home" className="logo-text glitch" data-text="<dontdude/>">
             &lt;dontdude/&gt;<span className="terminal-cursor">_</span>
           </a>
         </h2>
       </div>

       <div className="navlink">
          <ul className={mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#skill">SKILLS</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            {/* Stop propagation for interactive elements so menu stays open */}
            <li onClick={(e) => e.stopPropagation()}>
              <Music />
            </li>
            <li onClick={(e) => e.stopPropagation()}>
              <button className='home-btn' onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "dark" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
            </li>
          </ul>

          <button className='toggle' onClick={() => setMobile(!mobile)} aria-label="Toggle Menu">
            {mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
          </button>
       </div>
      </div>
     </header>
    </>
  )
}

export default Header