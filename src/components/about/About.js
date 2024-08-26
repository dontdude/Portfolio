import React from "react";
import "./About.css";
import logo from "../assets/logo.png";
//import Resume from "../assets/Resume_ChandanMishra.pdf";
import Resume from "../assets/ChandanMishra_Resume.pdf";

//React Reveal
import Fade from "react-reveal/Fade";

// Timeline Component
import TimelineData from "./timelineAPI";
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//TODO: Add resume link

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
            <Fade left>
              <div className="abt-card">
                <img
                  className="abt-img img-shadow circle"
                  src={logo}
                  alt="Profile"
                />
              </div>
            </Fade>
          </div>
          <Fade right>
            <div className="abt-right">
              {/* <h1 className="title">{title_name}</h1> */}
              {/* <p className="abt-sub">&emsp; My code's so clean, it makes whitespace jealous. 🧹</p> */}
              <p className="abt-sub">
                &emsp; Building software like a fine art: precise, polished, and
                profoundly impactful. 🚀
              </p>
              <p className="abt-desc">
                {" "}
                &emsp; I am a <span>software developer</span> with a profound
                mastery of <span>JavaScript</span> and a passion for crafting
                digital masterpieces. My expertise spans a wide range of
                technologies including <span>React</span>,{" "}
                <span>TypeScript</span>, and <span>Node.js</span>, allowing me
                to build applications that are not only{" "}
                <span>visually stunning</span> but also{" "}
                <span>performance-optimized</span>. I pride myself on delivering{" "}
                <span>clean, maintainable code</span> that drives{" "}
                <span>seamless user experiences</span> and leverages
                cutting-edge development practices.{" "}
              </p>{" "}
              <p className="abt-desc">
                {" "}
                &emsp; With a keen eye for detail and a relentless pursuit of
                excellence, I approach every project as an opportunity to{" "}
                <span>innovate</span> and <span>excel</span>. My journey in
                software development is marked by a blend of{" "}
                <span>analytical prowess</span> and{" "}
                <span>creative problem-solving</span>, making me a valuable
                asset to any development team. Whether working on{" "}
                <span>high-impact features</span> or intricate integrations, I
                strive to contribute to projects that push the boundaries of
                technology.{" "}
              </p>{" "}
              <p className="abt-desc">
                {" "}
                &emsp; Eager to bring my skills to your team?{" "}
                <a
                  href="mailto:mishrachandan.dd@gmail.com"
                  style={{ color: "#00bfff", textDecoration: "underline" }}
                >
                  {" "}
                  <strong>Let's Connect</strong>{" "}
                  <sup>
                    {" "}
                    <i className="fas fa-external-link-alt fa-xs"></i>{" "}
                  </sup>{" "}
                </a>{" "}
                and explore how we can achieve greatness together.{" "}
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
                    // Redirect to resume link
                    window.open(
                      "https://drive.google.com/file/d/1uaR_ne8H6M-6nQQf88XmKXkSCEi--K_w/view?usp=sharing",
                      "_blank"
                    );
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
          </Fade>
        </div>

        {/*------------------------------ Timeline Component ------------------------------ */}
        <div className="timeline">
          <h1 className="title">Timeline</h1>
          <VerticalTimeline>
            {TimelineData.map((element) => {
              let isWorkIcon = element.icon === "work";

              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.link ? (
                      <a href={element.link} style={{ color: "#00bfff" }}>
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
                  <p className="description">{element.desc1}</p>
                  <p className="description">{element.desc2}</p>
                  <p className="description">{element.desc3}</p>
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
