// src/components/Projects.jsx

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Dialog } from '@headlessui/react';

const projects = [
  {
    title: 'Home-Based Palliative Care System',
    description: 'Laravel + MySQL based medical appointment and home visit system.',
    tech: ['Laravel', 'PHP', 'MySQL'],
    demo: '#',
    code: '#',
    details: 'Full case study here...',
  },
  // Add more projects here...
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="bg-black text-green-400 py-12 px-4 min-h-screen">
      <h2 className="text-3xl mb-8 font-mono text-center">🚀 Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} onExpand={setSelected} />
        ))}
      </div>

      {/* Modal */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <Dialog.Panel className="bg-green-900 p-6 rounded-lg w-full max-w-2xl font-mono">
          <Dialog.Title className="text-xl mb-2">{selected?.title}</Dialog.Title>
          <Dialog.Description className="text-green-300">
            {selected?.details}
          </Dialog.Description>
          <button
            className="mt-4 px-4 py-2 bg-green-700 rounded hover:bg-green-600"
            onClick={() => setSelected(null)}
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
}
