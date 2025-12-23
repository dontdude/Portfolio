import React from "react";
import "./Home.css";
import cf from "../assets/cf.png";
import lt from "../assets/lt.png";
import gfg from "../assets/gfg.png";
import { useTypewriter } from "react-simple-typewriter";
import { LINKS } from "../../constants";

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
              Hey👋, I’m <span className="glitch" data-text="Chandan Mishra👨🏻‍💻">Chandan Mishra👨🏻‍💻</span>
            </h1>
            <h2 className="typewriter-wrapper">
              a <span>{text}</span>
            </h2>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h3>FIND ME ON</h3>
                <div className="button">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKS.linkedin}
                    title="LinkedIn"
                  >
                    <button className="btn_shadow" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKS.github}
                    title="GitHub"
                  >
                    <button className="btn_shadow" aria-label="GitHub">
                      <i className="fab fa-github"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKS.medium}
                    title="Medium"
                  >
                    <button className="btn_shadow" aria-label="Medium">
                      <i className="fab fa-medium"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKS.leetcode}
                    title="LeetCode"
                    aria-label="LeetCode"
                  >
                    <span className="btn_shadow">
                      <img src={lt} alt="LeetCode" width="22" height="22" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKS.codeforces}
                    title="Codeforces"
                    aria-label="Codeforces"
                  >
                    <span className="btn_shadow">
                      <img src={cf} alt="Codeforces" width="22" height="22" />
                    </span>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={LINKS.gfg}
                    title="GeeksforGeeks"
                    aria-label="GeeksforGeeks"
                  >
                    <span className="btn_shadow">
                      <img src={gfg} alt="GeeksforGeeks" width="42" height="22" />
                    </span>
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
