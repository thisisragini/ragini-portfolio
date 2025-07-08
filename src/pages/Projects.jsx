import React from 'react';

function Projects() {
  const projects = [
    {
      title: "AI-powered Medicine Detection",
      description: "OCR + Speech system that reads medicine strips and stores results in a database.",
      link: "https://github.com/theragini",
    },
    {
      title: "Driver Drowsiness Detection",
      description: "Real-time webcam-based ML system that alerts drowsy drivers.",
      link: "https://github.com/theragini",
    },
    {
      title: "Global Food Dashboard",
      description: "Power BI dashboard for real-time global food insights.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="py-20 px-6 bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-pink-400 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-pink-500 transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.description}</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
