// Enhanced Projects Section Component
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import FadeContent from '../animations/FadeContent';
import ScrollReveal from '../animations/ScrollReveal';
import AnimatedContent from '../animations/AnimatedContent';
import Magnet from '../animations/Magnet';
import SpotlightCard from '../animations/SpotlightCard';
import resumeData from '../data/resumeData.json';

const Projects = ({ darkMode }) => {
  const projects = resumeData.projects.map(project => ({
    title: project.name,
    description: project.description[0], // Use first description line
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop", // Placeholder image
    tech: project.technologies.slice(0, 4), // Show first 4 technologies
    github: project.repoUrl || "#",
    demo: project.liveDemo || project.repoUrl || "#"
  }));


  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={1}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </FadeContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedContent
              key={index}
              distance={120}
              direction="vertical"
              duration={0.9}
              ease="back.out(1.7)"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
              delay={0.5 + (index * 0.2)}
              threshold={0.1}
            >
              <Magnet padding={40} magnetStrength={30}>
                <SpotlightCard
                  className="h-full"
                  spotlightColor={darkMode ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.1)"}
                >
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group h-full`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-opacity-90 transition-all duration-300`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'} transform hover:scale-110 transition-transform duration-300 cursor-default`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          className={`flex items-center space-x-2 text-sm ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all duration-300 transform hover:scale-105`}
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          className={`flex items-center space-x-2 text-sm ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'} transition-all duration-300 transform hover:scale-105`}
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Magnet>
            </AnimatedContent>
          ))}
        </div>
      </div >
    </section >
  );
};

export default Projects;