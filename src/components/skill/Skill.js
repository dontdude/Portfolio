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
                  <li>JavaScript / TypeScript, React.js, Next.js</li>
                  <li>Redux, WebSockets, WebView Architecture</li>
                  <li>SSE Streaming, A/B Testing, OTA Releases</li>
                  <li>Bundle Optimization (4.4MB to 1.9MB)</li>
                  <li>React 19 Migration, Tailwind CSS, SASS</li>
                </ul>
              </div>
            </Zoom>
            <Zoom bottom className="skill-card-wrapper">
              <div className="skl-card">
                <img className="img-shadow" src={backend} alt="Backend" width="600" height="400" />
                <h2 className="card-title">Backend & Systems</h2>
                <ul>
                  <li>Go, Java (Spring Boot), Python, C++, Node.js</li>
                  <li>Kafka, Redis Streams, Microservices, REST APIs</li>
                  <li>PostgreSQL (pgvector), MongoDB, Redis</li>
                  <li>RAG Pipelines, Hybrid Search (RRF), Reranking</li>
                  <li>Token Bucket, Consumer Groups, PEL / DLQ</li>
                </ul>
              </div>
            </Zoom>
            <Zoom bottom className="skill-card-wrapper">
              <div className="skl-card">
                <img className="img-shadow" src={general} alt="Tools" width="600" height="400" />
                <h2 className="card-title">Cloud, DevOps & AI Tools</h2>
                <ul>
                  <li>AWS (EC2, S3), Kubernetes, Docker, Nginx</li>
                  <li>CI/CD, Git, Linux, MCP Servers</li>
                  <li>Claude Code, Eval-Gated Quality (CI Gates)</li>
                  <li>System Design, Performance Optimization</li>
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
