// src/components/ProjectCard.jsx

import { motion } from 'framer-motion';

export default function ProjectCard({ project, onExpand }) {
  return (
    <motion.div
      className="bg-black border border-green-600 rounded-md p-4 text-green-300 font-mono shadow-md hover:shadow-green-500 transition-all"
      whileHover={{ scale: 1.03 }}
      onClick={() => onExpand(project)}
    >
      <div className="mb-2 text-green-500"> {project.title}</div>
      <div className="text-xs opacity-80">{project.description}</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-green-800 px-2 py-0.5 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-2 text-sm flex gap-3">
        <a href={project.demo} target="_blank" className="underline">
          [Demo]
        </a>
        <a href={project.code} target="_blank" className="underline">
          [Source]
        </a>
      </div>
    </motion.div>
  );
}
