import React, { useState, useEffect, useLayoutEffect, Suspense, lazy } from "react";
import Header from "./components/header/Header.js";
import Hero from "./components/home/Home.js";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import StarCanvas from "./components/StarCanvas";
import { trackEvent } from "./utils/analytics";

// Lazy Load components below the fold for performance
const About = lazy(() => import("./components/about/About.js"));
const Skill = lazy(() => import("./components/skill/Skill.js"));
const Coding = lazy(() => import("./components/coding/Coding.js"));
const Projects = lazy(() => import("./components/projects/Projects.js"));
const Contact = lazy(() => import("./components/contact/Contact.js"));
const Footer = lazy(() => import("./components/footer/Footer.js"));

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

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Passive Tracking: Record visit once per session
    const hasVisited = sessionStorage.getItem('visited');
    if (!hasVisited) {
      trackEvent('Portfolio Visited');
      sessionStorage.setItem('visited', 'true');
    }
  }, []);

  // Dynamic cursor colors based on theme
  const cursorColor = theme === "dark" ? "255, 1, 79" : "0, 191, 255"; // Pink for dark, Blue for light
  const cursorOuterBorder = theme === "dark" ? "3px solid #ff014f" : "3px solid #006bbf";

  return (
    <div className={`App ${theme}`}>
      <StarCanvas theme={theme} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
        <hr />
        <About />
        <hr />
        <Skill />
        <hr />
        <Coding />
        <hr />
        <Projects />
        <hr />
        <Contact />
        <Footer />
      </Suspense>
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
