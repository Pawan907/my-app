import React from 'react';

function About() {
  return (
    <section className="bg-white shadow-xl rounded-lg p-6 m-4 border-l-4 border-purple-500">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">About Me</h2>
      <p className="text-gray-700 leading-relaxed text-lg">
        Hello! I'm <span className="font-semibold text-purple-600">Pawan Vashisth</span>, a passionate web and software developer currently pursuing my MCA from Manav Rachna University.
        <br /><br />
        I have hands-on experience with technologies like <span className="font-semibold">React.js, JavaScript, Java, Tailwind, HTML, CSS</span> and I love building interactive, user-friendly applications.
        <br /><br />
        I enjoy problem-solving and have worked on various internships and projects involving manual/database testing and full-stack development.
        I'm a quick learner, a strong team player, and always eager to contribute in a collaborative tech environment.
      </p>
    </section>
  );
}

export default About;