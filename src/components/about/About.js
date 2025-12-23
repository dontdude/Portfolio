import React from "react";
import "./About.css";
// import logo from "../assets/logo.png";
//import Resume from "../assets/Resume_ChandanMishra.pdf";
import Resume from "../assets/ChandanMishra_Resume.pdf";

//React Reveal
import Zoom from "react-reveal/Zoom";

// Timeline Component
import TimelineData from "./timelineAPI";
import { LINKS } from "../../constants"; // Centralized Constants
import { trackEvent } from "../../utils/analytics";
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//TODO: Add resume link
const logo = "https://avatars.githubusercontent.com/u/75321407?s=400";

const Features = () => {
  const title_name = "< About me />";
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <section id="about">
        <h1 className="title">{title_name}</h1>
        <div className="abt">
          <div className="abt-left">
            {/* <div className="abt-card bg"></div> */}
            <Zoom bottom>
              <div className="abt-card">
                <img
                  className="abt-img img-shadow circle"
                  src={logo}
                  alt="Profile"
                />
              </div>
            </Zoom>
          </div>
          <Zoom bottom>
            <div className="abt-right">
              {/* <h1 className="title">{title_name}</h1> */}
              {/* <p className="abt-sub">&emsp; My code's so clean, it makes whitespace jealous. 🧹</p> */}
              <p className="abt-sub">
                &emsp; Architecting scalable systems: robust, performant, and
                business-critical. 🚀
              </p>
              <p className="abt-desc">
                {" "}
                &emsp; I am a <span>Software Engineer</span>{" "}
                specializing in building <span>scalable, high-performance web systems</span>. 
                My focus goes beyond writing code—I <span>architect end-to-end solutions</span> that 
                drive measurable business impact and operational efficiency.
              </p>{" "}
              <p className="abt-desc">
                {" "}
                &emsp; With deep expertise in <span>React, TypeScript, and Node.js</span>, backed by a strong 
                foundation in <span>System Design</span> and <span>Backend Infrastructure</span> (Kafka, Python, SQL), 
                I bridge the gap between elegant interfaces and robust server-side logic. I excel at 
                <span>optimizing complex workflows</span>, reducing latency, and building infrastructure that scales 
                with user demand.
              </p>{" "}
              <p className="abt-desc">
                {" "}
                &emsp; Beyond individual contribution, I thrive on <span>technical leadership</span>—establishing 
                engineering standards, driving <span>architectural excellence</span>, and mentoring teams. 
                I treat every project with ownership, ensuring that technological choices translate directly into 
                <span>long-term value</span>.{" "}
              </p>{" "}
              <p className="abt-desc">
                {" "}
                &emsp; Ready to solve complex engineering challenges?{" "}
                <a
                  href="mailto:mishrachandan.dd@gmail.com"
                  className="link-primary"
                >
                  {" "}
                  <strong>Let's Connect</strong>{" "}
                  <sup>
                    {" "}
                    <i className="fas fa-external-link-alt fa-xs"></i>{" "}
                  </sup>{" "}
                </a>{" "}
                and build the future of tech together.{" "}
              </p>
              {/* download attribute in anchor tag, will download anything specified in href link and name it Chandan's Resume here
                <a href={Resume} download="Resume_ChandanMishra"><b>Resume</b>
                    <i class="fas fa-arrow-down"></i>
                </a> */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="rsm btn_shadow"
                  style={{
                    width: "8rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    // Track Download
                    trackEvent('Resume Downloaded');

                    // Redirect to resume link
                    window.open(LINKS.resume, "_blank");
                    // Trigger file download
                    const link = document.createElement("a");
                    link.href = Resume;
                    link.download = "ChandanMishra_Resume.pdf"; // file name
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <b>Resume&nbsp;</b>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          </Zoom>
        </div>

        {/*------------------------------ Timeline Component ------------------------------ */}
        <div className="timeline">
          <h1 className="title">Timeline</h1>
          <VerticalTimeline animate={ false }>
            {TimelineData.map((element) => {
              let isWorkIcon = element.icon === "work";

              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <Zoom bottom>
                    <h3 className="vertical-timeline-element-title">
                      {element.link ? (
                        <a href={element.link} className="text-primary">
                          {element.title}{" "}
                          <sup>
                            <i className="fas fa-external-link-alt fa-xs"></i>
                          </sup>
                        </a>
                      ) : (
                        element.title
                      )}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {element.location}
                    </h5>
                    <p className="description">{element?.desc1}</p>
                    <p className="description">{element?.desc2}</p>
                    <p className="description">{element?.desc3}</p>
                    <p className="description">{element?.desc4}</p>
                    <p className="description">{element?.desc5}</p>
                    <p className="description">{element?.desc6}</p>
                    <p className="description">{element?.desc7}</p>
                  </Zoom>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default Features;
