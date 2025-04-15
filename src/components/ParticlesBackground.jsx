import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Ensure you are importing loadFull

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Correct way to load all features
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0f0f0f", // Dark background color
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#00ffea", // Neon color for the particles
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ffea", // Neon color for links
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repulsion on hover
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
