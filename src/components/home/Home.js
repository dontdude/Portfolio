import React from "react"
import "./Home.css"
import hero from "../assets/hero.png";
import cf from "../assets/cf.png"
import cc from "../assets/cc.png"
import lt from "../assets/lt.png"
import gfg from "../assets/gfg.png"
import { useTypewriter } from "react-simple-typewriter"

//React reveal
import Fade from 'react-reveal/Fade';

// TODO: Add dark mode

const Home = () => {
  
  // typewriter bug fix using typewriter hook : typed only one word
  const {text} = useTypewriter({
    words: [' Competitive Programmer.', ' Full-Stack developer.', ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  })

  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          
          {/* left area */}
          <div className='left top'>
            <h1>
              Hi, I’m <span>Chandan Mishra</span>
            </h1>
            <h2>
              a 
              <span>{text}</span>
            </h2>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>
                <div className='button'>
                  <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/chandan-mishra-b772231ba/'>
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href='https://github.com/dontdude'>
                    <button className='btn_shadow'>
                      <i class="fab fa-github"></i>
                    </button>
                  </a>
                {/* </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4> */}
                <a target="_blank" rel="noopener noreferrer" href='https://codeforces.com/profile/dontDude'>
                  <button className='btn_shadow'>
                    <img src={cf} alt='' />
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.codechef.com/users/dontdude'>
                  <button className='btn_shadow'>
                    <img src={cc} alt='' />
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://auth.geeksforgeeks.org/user/dontdude/practice'>
                  <button className='btn_shadow'>
                    <img src={gfg} alt='' />
                  </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://leetcode.com/dontdude/'>
                  <button className='btn_shadow'>
                    <img src={lt} alt='' />
                  </button>
                </a>

               </div>
              </div>
            </div>
          </div>

          <Fade right>
            {/* image area */}
            <div className='right'>
              {/* <div className='right_img'> */}
                <img className='img-shadow' src={hero} alt='' />
              {/* </div> */}
            </div>
          </Fade>
        </div>
      </section>
    </>
  )
}

export default Home
