"use client";

// GitHub Logo SVG component
const GitHubIcon = () => (
  <svg
    className="w-5 h-5 inline-block mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: "DeepTechno",
    description: "DeepTechno is an advanced AI-driven system designed to analyze and classify technology news articles using Java, Python and Weka. The project leverages supervised learning models for high-accuracy news classification.",
    technologies: {
      frontend: ["HTML"],
      backend: ["Java", "Python","HTML", "Weka"]
    },
    learnings: ["Machine Learning Models", "Data Classification", "Web Scraping"],
    link: "https://github.com/ilaydagiris/DeepTechno"
  },
  {
    title: "MyB2B",
    description: "A comprehensive B2B platform enabling customers to purchase home appliances and sellers to efficiently manage their orders and sales.",
    technologies: {
      frontend: ["React.js", "CSS", "JavaScript"],
      backend: []
    },
    learnings: ["Component Architecture", "State Management", "Responsive Design"],
    link: "https://github.com/ilaydagiris/MyB2B"
  },
  {
    title: "Flight Management Module",
    description: "A robust backend system developed with Java Spring Boot for managing flight information and operations as part of backend training.",
    technologies: {
      frontend: [],
      backend: ["Java", "Spring Boot", "REST API"]
    },
    learnings: ["API Design", "Database Management", "Spring Framework"],
    link: "https://github.com/ilaydagiris/flight-management-module"
  },
  {
    title: "Post Management Page",
    description: "An interactive frontend project allowing users to engage with posts through comments, built with core web technologies.",
    technologies: {
      frontend: ["JavaScript", "HTML", "CSS"],
      backend: []
    },
    learnings: ["DOM Manipulation", "Event Handling", "CSS Layouts"],
    link: "https://github.com/ilaydagiris/TAV-Technologies-Intern-Frontend-Project"
  },
  {
    title: "Ajandam",
    description: "A smart scheduling application that sends email notifications for upcoming events. Currently under active development.",
    technologies: {
      frontend: [],
      backend: ["Java", "Spring Boot", "Email Integration"]
    },
    learnings: ["Email Service Integration", "Scheduling Systems", "Notification Management"],
    link: "https://github.com/ilaydagiris/Ajandam"
  },
  {
    title: "İlayda Giriş - Portfolio",
    description: "Personal portfolio website showcasing projects and skills, built with modern web technologies.",
    technologies: {
      frontend: ["Next.js", "React.js", "Tailwind CSS"],
      backend: []
    },
    learnings: ["Front-End Development", "Modern UI Design"],
    link: "https://github.com/ilaydagiris/my-portfolio"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12 text-blue-300">My Projects</h1>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-[#1A2333] p-6 rounded-2xl border border-[#2A3343] hover:border-blue-500/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-300">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
              
              <div className="mb-6 space-y-4">
                {project.technologies.frontend && project.technologies.frontend.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Frontend:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-[#2A3343] text-green-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.technologies.backend && project.technologies.backend.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Backend:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-[#2A3343] text-purple-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.learnings && project.learnings.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Key Learnings:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.learnings.map((learning) => (
                        <span 
                          key={learning}
                          className="bg-[#2A3343] text-yellow-300 px-3 py-1 rounded-full text-sm"
                        >
                          {learning}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {project.link && (
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#2A3343] text-blue-300 px-4 py-2 rounded-xl hover:bg-blue-500/10 transition-colors w-full justify-center"
                  >
                    <GitHubIcon />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
