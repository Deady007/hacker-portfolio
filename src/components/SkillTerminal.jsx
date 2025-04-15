// src/components/SkillsTerminal.jsx

import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const categories = {
  Frontend: ['ReactJS', 'TailwindCSS', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'jQuery', 'AJAX jQuery'],
  Backend: ['Laravel', 'NodeJS', 'ExpressJS', 'PHP', 'Python'],
  'Databases & Cloud': ['MySQL', 'MongoDB', 'Azure', 'DigitalOcean', 'Netlify', 'cPanel'],
  Tools: ['Git VCS', 'GitHub', 'Copilot', 'JIRA']
};

const SkillsTerminal = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center px-4 bg-transparent z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/10 backdrop-blur-md border border-cyan-500/30 shadow-xl rounded-xl p-6 max-w-4xl w-full text-white flex flex-col gap-6 glassmorphic-card"
      >
        <div className="text-lg mb-4">
          <Typewriter
            options={{
              strings: ['> show skills'],
              autoStart: true,
              loop: false,
              delay: 75,
            }}
          />
        </div>

        {Object.entries(categories).map(([section, skills], i) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.3 }}
            className="mb-4"
          >
            <p className="text-cyan-400 text-sm font-bold">[{section}]</p>
            <div className="pl-4 flex flex-wrap gap-3 mt-1">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="hover:text-cyan-300 transition-all duration-300 cursor-pointer text-gray-300"
                >
                  • {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsTerminal;
