import React from "react";
import "./Skill.css";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import general from "../assets/general.jpg";

import Zoom from "react-reveal/Zoom";

//TODO: Add image slider

const Skill = () => {
  const title_name = "< Skills />";

  return (
    <>
      <section id="skill">
        <div className="skl">
          <h1 className="title">{title_name}</h1>
          <div className="skl-cont">
            <Zoom bottom className="skill-card-wrapper">
              <div className="skl-card">
                <img className="img-shadow" src={frontend} alt="Frontend" width="600" height="400" />
                <h2 className="card-title">Frontend</h2>
                <ul>
                  <li>React.js, Next.js, Redux</li>
                  <li>WebSockets, WebView Architecture</li>
                  <li>TypeScript, JavaScript, HTML5</li>
                  <li>Chrome DevTools Protocol</li>
                  <li>Tailwind CSS, SASS</li>
                </ul>
              </div>
            </Zoom>
            <Zoom bottom className="skill-card-wrapper">
              <div className="skl-card">
                <img className="img-shadow" src={backend} alt="Backend" width="600" height="400" />
                <h2 className="card-title">Backend & Systems</h2>
                <ul>
                  <li>Docker, Kubernetes, AWS</li>
                  <li>Redis (Streams/PubSub), Kafka</li>
                  <li>Microservices, Event-Driven Arch</li>
                  <li>Go (Golang), Python, Node.js</li>
                  <li>SQL (PostgreSQL), Nginx, Linux</li>
                </ul>
              </div>
            </Zoom>
            <Zoom bottom className="skill-card-wrapper">
              <div className="skl-card">
                <img className="img-shadow" src={general} alt="Tools" width="600" height="400" />
                <h2 className="card-title">Tools & DevOps</h2>
                <ul>
                  <li>Git, GitHub Actions, CI/CD</li>
                  <li>System Design, Monorepo</li>
                  <li>Atomic Design Principles</li>
                  <li>Performance Optimization</li>
                  <li>Agile/Scrum Methodologies</li>
                </ul>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
