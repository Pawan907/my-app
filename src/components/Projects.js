import React from 'react';
import { FolderKanban } from 'lucide-react'; // optional icon, replace with emoji if needed

const Projects = () => {
  const projects = [
    {
      title: 'Number Guessing Game',
      description: 'A Java-based terminal game developed during my internship at CODSOFT. It challenges users to guess a randomly generated number within a range.',
      tech: ['Java']
    },
    {
      title: 'Quiz Game App',
      description: 'A Java console-based application that hosts multiple-choice quizzes with scoring and feedback features.',
      tech: ['Java']
    },
    {
      title: 'Dynamic Trading Website',
      description: 'A frontend simulation of a stock trading platform using HTML, CSS, and JavaScript. Built to improve real-time interactivity.',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <FolderKanban className="text-indigo-400" size={28} /> Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-700 transition-transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-3">{proj.description}</p>

            {proj.tech && (
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-700 text-white text-xs rounded-full"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
