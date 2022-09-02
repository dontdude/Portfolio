import React from "react"
import "./Home.css"
import hero from "../assets/hero.png";
import skill1 from "../assets/react.png"
import skill2 from "../assets/c++.png"
import skill3 from "../assets/nodejs.png"
import { useTypewriter } from "react-simple-typewriter"

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
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  {/* <i class="fab fa-react"></i> */}
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  {/* <i class="fab fa-cuttlefish">++</i> */}
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  {/* <i class="fab fa-node-js"></i> */}
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>

          {/* image area */}
          <div className='right'>
            {/* <div className='right_img'> */}
              <img src={hero} alt='' />
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
