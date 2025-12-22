import React from "react";
import "./Skill.css";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import general from "../assets/general.jpg";

import Fade from "react-reveal/Fade";

//TODO: Add image slider

const Skill = () => {
  const title_name = "< Skills />";

  return (
    <>
      <section id="skill">
        <div className="skl">
          <h1 className="title">{title_name}</h1>
          <div className="skl-cont">
            <Fade left>
              <div className="skl-card">
                <img className="img-shadow" src={frontend} alt="Frontend" width="600" height="400" />
                <h2 className="card-title">Frontend</h2>
                <ul>
                  <li>React.js, Next.js, atomic design</li>
                  <li>TypeScript, Redux Toolkit</li>
                  <li>Vue.js, HTML5, SASS</li>
                  <li>WebView, WebSockets, SSE</li>
                  <li>Chrome DevTools, Service Workers</li>
                </ul>
              </div>
            </Fade>
            <Fade bottom>
              <div className="skl-card">
                <img className="img-shadow" src={backend} alt="Backend" width="600" height="400" />
                <h2 className="card-title">Backend</h2>
                <ul>
                  <li>Node.js, Python, Kafka</li>
                  <li>PostgreSQL, MongoDB</li>
                  <li>Nginx, AWS, Docker</li>
                  <li>REST, GraphQL, gRPC</li>
                  <li>Git, GitHub, CI/CD</li>
                </ul>
              </div>
            </Fade>
            <Fade right>
              <div className="skl-card">
                <img className="img-shadow" src={general} alt="System Design" width="600" height="400" />
                <h2 className="card-title">System Design</h2>
                <ul>
                  <li>Real-time Systems</li>
                  <li>Event-Driven Architecture</li>
                  <li>Caching (Redis/CDN)</li>
                  <li>Monorepo Architecture</li>
                  <li>GenAI, LLM Integration</li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
