import React from "react"
import "./About.css"
import ResumeApi from "./ResumeAPI"
import Card from "./Card"
import logo from "../assets/logo.png";

const Features = () => {

  const title_name = "< About me />"

  return (
    <>
      <section id='about'>
        <div className="abt">
          <div className="abt-left">
            {/* <div className="abt-card bg"></div> */}
            <div className="abt-card">
              <img className='abt-img' src={logo} alt='Profile' />
            </div>
          </div>
          <div className="abt-right">
            <h1 className="title">{title_name}</h1>
              <p className="abt-sub">Create React App is great but I think NextJs is phenomenal.</p>
              <p className="abt-desc"> &emsp; <span>Hey!</span>  My name is <span>Chandan Mishra</span>, and I’m a student pursuing bachelors in Computer Engineering at <span>Ajay Kumar Garg Engineering College</span>. I have a strong hold on <span>C++, ReactJs and REST APIs using NodeJs</span>. Currently I am working on my problem solving skills as well as building websites from scratch using <span>MERN Stack</span>. I'm very <span>passionate about building new things</span>, and my goal is to pursue this passion within the field of software engineering.</p>
              <p className="abt-desc abt-con">&emsp;In conclusion, I am a <span>Tech Savvy</span> and my passion for technology is something which drives me to solve real world problems within a highly collaborative work environment.</p>
              <div className="btn_shadow">
                {/* download attribute in anchor tag, will download anything specified in href link and name it Chandan's Resume here */}
                <a href={logo} download="Chandan's Resume"><span>Resume</span>
                    {/* <i class="fas fa-chevron-right"></i> */}
                    <i class="fas fa-arrow-down"></i>
                </a>
              </div>
            </div>
        </div>

         {/* Resume Part */}
        {/* <div className="Resume">
          <div className='container top'>

            <div className='content-section mtop d_flex'>
              <div className='left'>
                <div className='heading'>
                  <h2>{"< Education />"}</h2>
                </div>

                <div className='content'>
                  {ResumeApi.map((val, id) => {
                    if (val.category === "education") {
                      return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                    }
                  })}

                </div>
              </div>
              <div className='left'>
                <div className='heading'>
                  <h3>Experience</h3>
                </div>

                <div className='content'>
                  {ResumeApi.map((val, index) => {
                    if (val.category === "experience") {
                      return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </section>
    </>
  )
}

export default Features
