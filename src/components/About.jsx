import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-transparent z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/10 backdrop-blur-md border border-cyan-500/30 shadow-xl rounded-xl p-6 max-w-4xl w-full text-white flex flex-col md:flex-row gap-6 glassmorphic-card"
      >
        {/* 👤 Glitch Image */}
        <div className="relative w-full md:w-1/3 overflow-hidden rounded-lg">
          <img
            src="/profile.jpg"
            alt="profile"
            className="object-cover rounded-lg glitch-img"
          />
        </div>

        {/* 🧑‍💻 Text Content */}
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed font-mono">
            I’m a cyberpunk-loving full stack developer with a deep passion for
            cybersecurity and futuristic tech. I build responsive, secure, and
            aesthetic web experiences using React, Laravel, Python, and more.
          </p>
          <a
            href="/Viral_Parmar_Resume.pdf"
            download
            className="inline-block px-5 py-2 border border-cyan-400 text-cyan-300 rounded hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
