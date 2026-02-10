// Projects Section Component
import { Code2, Database, Zap, ExternalLink, Github, FolderGit2 } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Projects = ({ darkMode }) => {
  const projects = resumeData.projects || [];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Personal <span className="text-orange-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4 max-w-2xl mx-auto">
              Building innovative solutions and exploring new technologies
            </p>
          </div>
        </FadeContent>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              distance={60}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.2 + (index * 0.1)}
              threshold={0.2}
            >
              <div className="glass-card rounded-2xl overflow-hidden relative group hover:border-orange-glow transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer h-full flex flex-col perspective-1000">
                {/* Top Orange Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] z-10"></div>

                {/* Preview Thumbnail with Dark Overlay */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a0f0a] to-black">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent group-hover:from-orange-500/20 transition-all duration-500"></div>

                  {/* Project Icon/Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-600/20 flex items-center justify-center backdrop-blur-sm border border-orange-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FolderGit2 className="w-10 h-10 text-[#ff6b35]" />
                    </div>
                  </div>

                  {/* Tech Icons Floating */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <Code2 className="w-4 h-4 text-[#ff6b35]" />
                    </div>
                    <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                      <Database className="w-4 h-4 text-[#ff6b35]" />
                    </div>
                    <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300">
                      <Zap className="w-4 h-4 text-[#ff6b35]" />
                    </div>
                  </div>

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-gradient transition-colors mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a0a0a0] text-sm line-clamp-3 mb-4 flex-1">
                    {Array.isArray(project.description) ? project.description.join(' ') : project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-[#ff8c42] border border-orange-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-[#ff8c42] border border-orange-500/20">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons with Glow Effects */}
                  <div className="flex gap-3 mt-auto">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-orange-500/20 text-[#ff6b35] border border-orange-500/30 hover:bg-orange-500/30 hover:border-orange-500/50 hover:orange-glow transition-all text-sm font-semibold transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {(project.liveUrl || project.liveDemo) && (
                      <a
                        href={project.liveUrl || project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white hover:from-[#ff8c42] hover:to-[#ff6b35] transition-all text-sm font-semibold orange-glow-hover transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 3D Depth Effect - Corner Accent */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-orange-500/0 to-orange-500/30 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Tilt Shadow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 25px 50px -12px rgba(255, 107, 53, 0.3)' }}></div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Bottom Stats */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          delay={0.8}
        >
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 glass-card rounded-2xl px-8 py-4 border-orange-glow">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#ff6b35]" />
                <span className="text-[#e0e0e0] font-medium">{projects.length}+ Projects</span>
              </div>
              <div className="w-px h-6 bg-orange-500/30"></div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* CSS for 3D Tilt Effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .group:hover {
          transform: rotateX(2deg) rotateY(-2deg) translateY(-1rem) scale(1.05);
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Projects;