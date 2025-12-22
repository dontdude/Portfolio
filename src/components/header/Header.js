import React, { useState } from 'react';
import "./Header.css";
import Music from "../common/Music";
// import logo from "../assets/logo.png";
const logo = "https://avatars.githubusercontent.com/u/75321407?s=200";

const Header = ({ theme, toggleTheme }) => {

  // when we scroll, what header looks like
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")           //element with class "header" selected
    header.classList.toggle("active", window.scrollY > 100)   // active class is added and removed because of classList.toggle
  }) 

  // toggle state
  const [ismobile, setMobile] = useState(false);

  // changes value of mobile state, according to type of screen
  // useEffect(() => {
  //   const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
  //   const mobile = Boolean(
  //    userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i),
  //   );
  //   setMobile(mobile);
  // }, []);

  console.log(ismobile);

  return (
    <>
     <header className="header">
      <div className="container d_flex">
       <div className="logo">
         <h2>
           <a href="#home" className="logo-text">
             &lt;dontdude/&gt;<span className="terminal-cursor">_</span>
           </a>
         </h2>
       </div>

       <div className="navlink">
          {/* link tag is responsible for no appearance of nav link on small screen initially */}
          <ul className={ismobile ? "nav-links-mobile" : "link f_flex uppercase"}>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#skill">SKILLS</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
            <li>
              <Music />
            </li>
            <li>
              <button className='home-btn' onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "dark" ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
            </li>
          </ul>

          <button className='toggle' onClick={() => setMobile(!ismobile)} aria-label="Toggle Menu">
            {/* to understand why button is not visible in larger screen, read "open", "close" styles in header.css */}
            {ismobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            {/* fa-times fa-bars, classes from font awesome, link in index.html */}
          </button>
       </div>
      </div>
     </header>
    </>
  )
}

export default Header