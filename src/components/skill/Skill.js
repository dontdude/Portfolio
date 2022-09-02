import React from 'react';
import './Skill.css';
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import general from "../assets/general.png";


const Skill = () => {

  const title_name = "< Skills />"

  return (
    <>
      <section id='skill'>
        <div className="skl">
          <h1 className="title">{title_name}</h1>
          <div className='skl-cont'>
            <div className="skl-card">
                  <img src={frontend} alt='Frontend' />
                  <h2 className="card-title">frontend</h2>
                  <ul>
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>NextJs</li>
                    <li>Tailwind Css</li>
                    {/* <li>BootsTrap</li> */}
                  </ul>
            </div>
            <div className="skl-card">
                  <img src={backend} alt='Backend' />
                  <h2 className="card-title">Backend</h2>
                  <ul>
                    <li>NodeJs / ExpressJs</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>OAuth</li>
                    <li>REST APIs</li>
                    {/* <li>AWS</li> */}
                    {/* <li>MySQL</li> */}
                  </ul>
            </div>
            <div className="skl-card">
                  <img src={general} alt='General' />
                  <h2 className="card-title">General</h2>
                  <ul>
                    <li>C/C++</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Competitive Programming</li>
                    <li>Git / GitHub</li>
                    <li>Heroku / Netlify / Vercel</li>
                    {/* <li>Docker</li> */}
                    {/* <li>VS Code</li>
                    <li>Linux</li> */}
                  </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
