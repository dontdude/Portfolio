import React, { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Dynamic cursor colors based on theme
  const cursorColor = theme === "dark" ? "255, 1, 79" : "0, 191, 255"; // Pink for dark, Blue for light
  const cursorOuterBorder = theme === "dark" ? "3px solid #ff014f" : "3px solid #006bbf";

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
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
          backgroundColor: `rgb(${cursorColor})`,
          zIndex: 10000,
        }}
        outerStyle={{
          border: cursorOuterBorder,
          zIndex: 10000,
        }}
      />
    </div>
  );
};

export default App;
