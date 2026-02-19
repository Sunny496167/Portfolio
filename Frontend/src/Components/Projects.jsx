// Projects Section Component
import { useState } from "react";
import { Code2, ExternalLink, Github, Globe } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import SpotlightCard from "../animations/SpotlightCard";
import resumeData from "../data/resumeData.json";

const Projects = ({ darkMode }) => {
  const allProjects = resumeData.projects || [];

  // Only show deployed projects (ones with liveDemo URL)
  const deployedProjects = allProjects.filter((p) => p.liveDemo);

  // Non-deployed projects (commented out / kept for reference)
  // const nonDeployedProjects = allProjects.filter((p) => !p.liveDemo);
  // Non-deployed: Backend, ExcuseGenerator, AIChoiceHelper, classRoomManagement

  const [loadedIframes, setLoadedIframes] = useState({});

  const handleIframeLoad = (id) => {
    setLoadedIframes((prev) => ({ ...prev, [id]: true }));
  };

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

        {/* Deployed Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deployedProjects.map((project, index) => (
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
              <SpotlightCard className="glass-card rounded-2xl overflow-hidden relative group hover:border-orange-glow transition-all duration-500 cursor-pointer h-full flex flex-col">
                {/* Top Orange Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] z-10"></div>

                {/* Live Site Iframe Preview */}
                {/* Live Site Iframe Preview or Placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a0f0a] to-black group-hover:scale-105 transition-transform duration-500">
                  {/* If preview is active, show iframe */}
                  {loadedIframes[project.id] ? (
                    <iframe
                      src={project.liveDemo}
                      title={`${project.name} preview`}
                      className="absolute top-0 left-0 border-0 w-full h-full"
                      style={{
                        width: '1280px',
                        height: '720px',
                        transform: 'scale(0.28)',
                        transformOrigin: 'top left',
                      }}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  ) : (
                    /* Placeholder with Load Button */
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
                      <div className="w-12 h-12 mb-3 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-6 h-6 text-[#ff6b35]" />
                      </div>
                      <h4 className="text-white font-medium mb-1">Live Preview</h4>
                      <p className="text-xs text-[#a0a0a0] mb-4">Click to load interactive preview</p>

                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleIframeLoad(project.id);
                          }}
                          className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#ff6b35] text-xs font-semibold hover:bg-orange-500/20 transition-all flex items-center gap-2"
                        >
                          <Globe className="w-3 h-3" />
                          Load Preview
                        </button>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Visit
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Hover overlay with "Visit" prompt (only visible when hovering AND loaded) */}
                  {loadedIframes[project.id] && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ExternalLink className="w-4 h-4" />
                        Visit Live Site
                      </div>
                    </a>
                  )}

                  {/* Live badge */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-emerald-500/30">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Live</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-gradient transition-colors mb-3">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a0a0a0] text-sm line-clamp-2 mb-4 flex-1">
                    {Array.isArray(project.description) ? project.description.join(' ') : project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-[#ff8c42] border border-orange-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-[#ff8c42] border border-orange-500/20">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-orange-500/20 text-[#ff6b35] border border-orange-500/30 hover:bg-orange-500/30 hover:border-orange-500/50 transition-all text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white hover:from-[#ff8c42] hover:to-[#ff6b35] transition-all text-sm font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
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
                <span className="text-[#e0e0e0] font-medium">{allProjects.length}+ Projects</span>
              </div>
              <div className="w-px h-6 bg-orange-500/30"></div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-500" />
                <span className="text-[#e0e0e0] font-medium">{deployedProjects.length} Deployed</span>
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
    </section>
  );
};

export default Projects;