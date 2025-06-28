import React from 'react';
import { Wrench } from 'lucide-react'; // optional icon, or replace with emoji

const Skills = () => {
  const skills = ['React', 'JavaScript', 'Java', 'HTML', 'CSS', 'Git', 'Tailwind CSS'];

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Wrench className="text-indigo-400" size={28} /> Skills
      </h2>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-2 bg-gray-800 border border-indigo-500 text-sm rounded-full shadow hover:bg-indigo-600 transition-all duration-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;


