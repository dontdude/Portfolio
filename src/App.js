import React from "react";
import Header from "./components/header/Header.js";
import Hero from "./components/home/Home.js";
import About from "./components/about/About.js";
import Skill from "./components/skill/Skill.js";
import Projects from "./components/projects/Projects.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <hr />
      <About />
      <hr />
      <Skill />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={false}
        innerStyle={{
          backgroundColor: "#00bfff",
          zIndex: 10000,
        }}
        outerStyle={{
          border: "3px solid #006bbf",
          zIndex: 10000,
        }}
      />
    </div>
  );
};

export default App;
