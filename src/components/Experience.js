import React from 'react';
import { Briefcase } from 'lucide-react'; // optional: install lucide-react or replace with emoji/icons

const Experience = () => {
  const internships = [
    {
      company: 'AI Ingenious Solution Pvt. Ltd.',
      role: 'Software Developer Intern',
      duration: 'Feb 2024 – July 2024',
      location: 'Delhi',
      description: `Currently spearheading the development of a Dynamic Trading Website to enhance user engagement and real-time trading experience. Using ReactJS, JavaScript, HTML, and CSS to design the frontend and develop robust APIs. Responsible for crafting intuitive user experiences and solving complex frontend challenges for seamless functionality.`
    },
    {
      company: 'CODSOFT',
      role: 'Frontend Developer Intern',
      duration: 'Sept 2023 – Oct 2023',
      location: 'Remote',
      description: `Developed and maintained web applications using HTML, CSS, and JavaScript. Worked closely with cross-functional teams to gather requirements and implement design changes. Optimized requirement gathering methods, reducing time spent by 15%.`
    },
    {
      company: 'INFOTRIXS',
      role: 'Web Developer Intern',
      duration: 'Aug 2023 – Sept 2023',
      location: 'Remote',
      description: `Created interactive and visually appealing UIs to improve user experience. Communicated technical ideas clearly across teams, which led to a 15% increase in user engagement and 10% more website visits. Technologies used: HTML, CSS, JavaScript.`
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Briefcase className="text-indigo-400" size={28} /> Internship Experience
      </h2>

      <div className="space-y-6">
        {internships.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition-colors p-6 rounded-2xl shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-indigo-400">{item.company}</h3>
            <p className="text-sm text-gray-400 mb-2">
              {item.role} · <span className="italic">{item.duration}</span> · {item.location}
            </p>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
