
import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  techStack: string;
  description: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    name: "fitMind-ai",
    techStack: "JavaScript/Node.js (Microservices), Express, MongoDB, Docker/Kubernetes",
    description: "ai-powered fitness & wellness platform built on microservices. tracks user activities, offers personalized recommendations, and scales via containerized services.",
    githubUrl: "https://github.com/eshaan-kapooswalla/FitMind-AI"
  },
  {
    name: "jobber",
    techStack: "Java (Spring Boot), React, PostgreSQL, Docker",
    description: "distributed job portal platform with microservices. spring boot handles backend apis, react frontend provides a responsive ui, database stores job and user data.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Jobber"
  },
  {
    name: "morphUNet",
    techStack: "Python, PyTorch, NumPy",
    description: "implements various u-net architectures in pytorch for image segmentation tasks, focusing on datasets like carvana's masking challenge.",
    githubUrl: "https://github.com/eshaan-kapooswalla/MorphUNet"
  },
  {
    name: "shopSmart-ai",
    techStack: "Python, Jupyter Notebook, scikit-learn, Pandas",
    description: "e-commerce recommender system using machine learning to suggest products based on user behavior and purchase history.",
    githubUrl: "https://github.com/eshaan-kapooswalla/ShopSmart-AI"
  },
  {
    name: "stockPredictor",
    techStack: "Python, scikit-learn/Keras, Pandas",
    description: "applies ml models to predict stock prices, using historical data and features engineered in python notebooks.",
    githubUrl: "https://github.com/eshaan-kapooswalla/StockPredictor"
  },
  {
    name: "gideon-ai-desktop-assistant",
    techStack: "Python, SpeechRecognition, pyttsx3, APIs",
    description: "desktop-based ai assistant (inspired by the flash) with voice i/o, can perform tasks, answer queries, and integrate with various apis.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Gideon-AI-Desktop-Assistant"
  },
  {
    name: "tetrisPlay",
    techStack: "C++, SDL (or console-based)",
    description: "classic tetris game implemented in c++. hands-on experience with game mechanics, input handling, and state management.",
    githubUrl: "https://github.com/eshaan-kapooswalla/TetrisPlay"
  },
  {
    name: "mandelbrotExplorer",
    techStack: "MATLAB",
    description: "matlab script to generate and visualize the mandelbrot set, ideal for visual exploration of complex fractal patterns.",
    githubUrl: "https://github.com/eshaan-kapooswalla/MandelbrotExplorer"
  },
  {
    name: "book-store",
    techStack: "JavaScript, Node.js, Express, MongoDB, React (MERN)",
    description: "full-stack mern application for managing a book inventory with crud operations and a clean react ui.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Book-Store"
  },
  {
    name: "cabieeee",
    techStack: "JavaScript, React Native (or Expo), Firebase/Socket.io, Node.js",
    description: "real-time cab-ordering mobile app (an uber clone). implements booking flows, live driver updates, and chat features.",
    githubUrl: "https://github.com/eshaan-kapooswalla/Cabieeee"
  },
  {
    name: "plantWateringSystem",
    techStack: "Java (Arduino/Embedded), Sensors, MQTT (optional), Server backend",
    description: "automated system that monitors soil moisture and waters plants accordingly. involves hardware sensors, timer logic, and server integration.",
    githubUrl: "https://github.com/eshaan-kapooswalla/PlantWateringSystem"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen px-4 md:px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-red-500 mb-4">
            projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <a
              key={index}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-black/60 backdrop-blur-sm border border-red-500 rounded-lg p-6 h-full transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer">
                {/* Project Name */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-red-500 group-hover:text-white transition-colors duration-300">
                    {project.name}
                  </h3>
                  <ExternalLink 
                    size={18} 
                    className="text-red-500 group-hover:text-white transition-colors duration-300" 
                  />
                </div>

                {/* Tech Stack */}
                <div className="mb-3">
                  <p className="text-sm font-medium text-white group-hover:text-white transition-colors duration-300 mb-1">
                    tech stack:
                  </p>
                  <p className="text-sm text-red-500 group-hover:text-white transition-colors duration-300">
                    {project.techStack}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-red-500 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Down Arrow */}
      <div className="flex justify-center mt-16">
        <ChevronDown 
          size={32} 
          className="text-red-500 animate-bounce cursor-pointer hover:text-red-400 transition-colors" 
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
