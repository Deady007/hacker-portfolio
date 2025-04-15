import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center text-white relative z-10 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold font-hacker text-neon"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="text-cyan-400">Radhey</span>
      </motion.h1>

      <motion.div
        className="mt-4 text-xl md:text-2xl text-gray-300 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Typewriter
          options={{
            strings: ["Cybersecurity Researcher", "Frontend Cyborg", "Full Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
