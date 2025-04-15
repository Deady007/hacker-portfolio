import ParticlesBackground from "../components/ParticlesBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillTerminal from "../components/Skillterminal"; // Import SkillsTerminal
import Projects from "../components/Projects";
import Galaxy from "../components/Galaxy";

const Home = () => {
  return (
    <div className="relative">
      <ParticlesBackground />  {/* Ensure it's included here */}
      <Hero />
      <About />  {/* Include the About component here */}
      <section id="skills">
        <h2 className="text-center text-3xl text-green-400 mb-8 font-mono">Skills</h2>
        <SkillTerminal />  {/* Use SkillTerminal here */}
      </section>
      <Projects />
      <Galaxy />  {/* Include the Galaxy component here */}
    </div>
  );
};

export default Home;
