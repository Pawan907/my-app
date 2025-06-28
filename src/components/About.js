import React from 'react';
import { User } from 'lucide-react'; // optional icon, or replace with emoji

const About = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <User className="text-indigo-400" size={28} /> About Me
      </h2>

      <p className="text-gray-300 leading-relaxed text-[17px]">
        Hello! I'm <span className="text-indigo-400 font-semibold">Pawan Vashisth</span>, a passionate web developer currently pursuing my MCA. I specialize in building modern, responsive web applications using <strong className="text-white">React, JavaScript</strong> and backend technologies like <strong className="text-white">Java</strong>.  
        <br /><br />
        I’ve completed multiple internships and built dynamic projects that solve real-world problems. I'm always eager to learn new technologies and grow as a developer in this ever-evolving tech industry.
      </p>
    </div>
  );
};

export default About;
