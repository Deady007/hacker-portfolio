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
    details: 'A full-featured Laravel-based platform for managing patient home visits, medical records, and appointments, with role-based access for doctors, nurses, and admins.',
  },
  {
    title: 'Guglu1 – Personal AI Assistant',
    description: 'AI-powered assistant using Flask and NLP to perform daily tasks.',
    tech: ['Flask', 'Python', 'NLP'],
    demo: '#',
    code: '#',
    details: 'An AI-based assistant built using Flask and NLP. It performs tasks like sending messages, fetching weather, and setting reminders using conversational commands.',
  },
  {
    title: 'Hacker Portfolio',
    description: 'Hacker-themed React portfolio with animated transitions.',
    tech: ['React', 'Node.js', 'Express'],
    demo: '#',
    code: '#',
    details: 'A hacker-themed personal portfolio using React. It showcases projects, skills, and contact info with dark-mode styling and smooth animations.',
  },
  {
    title: 'SamratV1 – Food Delivery App',
    description: 'React + Firebase app for non-veg food ordering.',
    tech: ['React', 'Firebase'],
    demo: '#',
    code: '#',
    details: 'A non-veg focused food delivery app built in React with Firebase backend for authentication and real-time order management.',
  },
  {
    title: 'Weather UI',
    description: 'Minimal weather app with OpenWeather API and React.',
    tech: ['React', 'OpenWeather API'],
    demo: '#',
    code: '#',
    details: 'A weather forecast UI that fetches real-time data from OpenWeather API. Includes city search and dynamic weather display using React.',
  },
  {
    title: 'eSports Event Management',
    description: 'Core PHP app to manage eSports tournaments and teams.',
    tech: ['PHP', 'MySQL'],
    demo: '#',
    code: '#',
    details: 'System for organizing and managing eSports tournaments with team registration, live scoring, and role-based access.',
  },
  {
    title: 'Money Management System',
    description: 'Track income, expenses and savings with a PHP + MySQL app.',
    tech: ['PHP', 'MySQL'],
    demo: '#',
    code: '#',
    details: 'A budget tracker allowing users to manage finances, categorize transactions, and set financial goals. Built in Core PHP.',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal site with HTML, CSS, JS.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: '#',
    code: '#',
    details: 'Clean and responsive personal portfolio that highlights skills, projects, and contact info. Built using HTML/CSS/JS with subtle animations.',
  },
  {
    title: 'Task Management System',
    description: 'Laravel app for managing to-do tasks with deadlines.',
    tech: ['Laravel', 'MySQL'],
    demo: '#',
    code: '#',
    details: 'A full-stack task management system for users to track their daily work, deadlines, and statuses. Supports login, CRUD, and dashboards.',
  },
  {
    title: 'Self-Help Care Group Management',
    description: 'Manage care groups, schedules and communication.',
    tech: ['Laravel', 'MySQL'],
    demo: '#',
    code: '#',
    details: 'Built for healthcare groups to manage members, schedules, and resources. Includes messaging, notifications and activity tracking.',
  },
  {
    title: 'Weather App (Basic)',
    description: 'Basic weather info app built using React and API.',
    tech: ['React', 'OpenWeather API'],
    demo: '#',
    code: '#',
    details: 'A simple React app that fetches and displays real-time weather data using OpenWeather API. Responsive and user-friendly UI.',
  },
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
          <Dialog.Description className="text-green-300 whitespace-pre-wrap">
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
