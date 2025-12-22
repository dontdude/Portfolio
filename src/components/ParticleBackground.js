import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -1, // Behind everything
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: theme === "dark" ? "#ffffff" : "#3c3e41", // White in dark mode, Dark Grey in light
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3, // Subtle opacity
        random: true,
      },
      size: {
        value: 2,
        random: true,
      },
      move: {
        enable: true,
        speed: 1, // Slow, professional movement
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 150,
        color: theme === "dark" ? "#ffffff" : "#3c3e41",
        opacity: 0.2, // Subtle links
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab", // Constellation effect on hover
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
      },
    },
    retina_detect: true,
    background: {
      color: "transparent", // Background color handled by CSS
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticleBackground;
