import React from "react"
import "./About.css"
import logo from "../assets/logo.jpg";
import Resume from "../assets/Resume_ChandanMishra.pdf";

//React Reveal
import Fade from 'react-reveal/Fade';

// Timeline Component
import TimelineData from "./timelineAPI"
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//TODO: Add resume link

const Features = () => {

  const title_name = "< About me />"
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <section id='about'>
        <h1 className="title">{title_name}</h1>
          <div className="abt">
            <div className="abt-left">
              {/* <div className="abt-card bg"></div> */}
              <Fade left>
                <div className="abt-card">
                  <img className='abt-img img-shadow circle' src={logo} alt='Profile' />
                </div>
              </Fade>
            </div>
            <Fade right>
              <div className="abt-right">
                {/* <h1 className="title">{title_name}</h1> */}
                  <p className="abt-sub">&emsp; Create React App is great, but I think NextJs is the "New Standard".</p>
                  <p className="abt-desc"> &emsp; <span>Hey!</span>  My name is <span>Chandan Mishra</span>, and I’m a student pursuing bachelors in Computer Engineering at <span>Ajay Kumar Garg Engineering College</span>. I have a strong hold on <span>C++, ReactJs and REST APIs using NodeJs</span>. Currently I am working on my problem solving skills as well as building websites from scratch using <span>MERN Stack</span>. I'm very <span>passionate about building new things</span>, and my goal is to pursue this passion within the field of software engineering.</p>
                  <p className="abt-desc abt-con">&emsp;In conclusion, I am a <span>Tech Savvy</span> and my passion for technology is something which drives me to solve real world problems within a highly collaborative work environment.</p>
                  <div className="rsm btn_shadow">
                    {/* download attribute in anchor tag, will download anything specified in href link and name it Chandan's Resume here */}
                    {/* <a href={Resume} download="Resume_ChandanMishra"><b>Resume</b>
                        <i class="fas fa-arrow-down"></i>
                    </a> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/18EyEKgYZKMGiDXjj5WYPWN-JJj1C8VUK/view"><b>Resume&nbsp;</b>
                        <i class="fas fa-chevron-right"></i>
                    </a>
                    {/* target="_blank" rel="noopener noreferrer"       to open links in new tab */}
                  </div>
              </div>
            </Fade>
          </div>
        


  {/*------------------------------ Timeline Component ------------------------------ */}
        <div className='timeline'>
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
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p className="description">{element.desc1}</p>
                  <p className="description">{element.desc2}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>

      </section>
    </>
  )
}

export default Features
