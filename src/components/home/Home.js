import React from "react";
import "./Home.css";
import cf from "../assets/cf.png";
import lt from "../assets/lt.png";
import gfg from "../assets/gfg.png";
import { useTypewriter } from "react-simple-typewriter";

//React reveal
//import Fade from 'react-reveal/Fade';

// TODO: Add dark mode

const Home = () => {
  // typewriter bug fix using typewriter hook : typed only one word
  const { text } = useTypewriter({
    words: [
      " Senior Software Engineer.",
      " Systems Architect.",
      " Competitive Programmer.",
      " Problem Solver.",
    ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          {/* left area */}
          <div className="left top">
            <h1>
              Hey👋, I’m <span>Chandan Mishra👨🏻‍💻</span>
            </h1>
            <h2>
              a<span>{text}</span>
            </h2>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND ME ON</h4>
                <div className="button">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/chandan-dontdude/"
                    title="LinkedIn"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/dontdude"
                    title="GitHub"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@dontdude"
                    title="Medium"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-medium"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://leetcode.com/dontdude/"
                    title="LeetCode"
                  >
                    <button className="btn_shadow">
                      <img src={lt} alt="" />
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://codeforces.com/profile/dontDude"
                    title="Codeforces"
                  >
                    <button className="btn_shadow">
                      <img src={cf} alt="" />
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://auth.geeksforgeeks.org/user/dontdude/practice"
                    title="GeeksforGeeks"
                  >
                    <button className="btn_shadow">
                      <img src={gfg} alt="" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right area */}
          {/* <Fade right>
            <div className='right'>
                <img className='img-shadow' src={hero} alt='' />
            </div>
          </Fade> */}
        </div>
      </section>
    </>
  );
};

export default Home;
