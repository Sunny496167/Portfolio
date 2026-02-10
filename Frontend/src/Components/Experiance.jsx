// Experience Section Component
import { Briefcase, Building2, Code2, ChevronRight } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Experience = ({ darkMode }) => {
  // Use internships data from resumeData
  const experiences = resumeData.internships || [];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Work <span className="text-orange-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4">
              My professional journey and contributions
            </p>
          </div>
        </FadeContent>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Timeline Line with Progress */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] orange-glow-sm overflow-hidden">
            {/* Animated Progress Indicator */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-orange-500 to-transparent animate-pulse"
              style={{ animation: 'slideDown 3s ease-in-out infinite' }}>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedContent
                key={exp.id}
                distance={60}
                direction="horizontal"
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                delay={0.2 + (index * 0.15)}
                threshold={0.2}
              >
                <div className="relative pl-16">
                  {/* Timeline Dot with Pulse */}
                  <div className="absolute left-6 top-8 transform -translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] border-4 border-black shadow-lg pulse-glow"></div>
                  </div>

                  {/* Experience Card */}
                  <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-2">
                    {/* Top Orange Accent Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                    {/* Left Orange Accent on Hover */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff6b35] to-[#d94f1f] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                    <div className="space-y-6">
                      {/* Header Section */}
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-3">
                            {/* Briefcase Icon */}
                            <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl group-hover:orange-glow-sm transition-all duration-300">
                              <Briefcase className="w-6 h-6 text-[#ff6b35]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-gradient transition-colors">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-2 text-[#e0e0e0] flex-wrap">
                                <Building2 className="w-4 h-4 text-[#a0a0a0]" />
                                <p className="font-semibold">{exp.company}</p>
                                {exp.location && <span className="text-[#a0a0a0]">• {exp.location}</span>}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-[#ff8c42]">
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Technologies Used */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-orange-500/10 rounded-lg mt-1">
                            <Code2 className="w-5 h-5 text-[#ff6b35]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[#a0a0a0] mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/5 text-[#ff8c42] border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Responsibilities & Impact */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-[#a0a0a0] flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#ff6b35]" />
                            Key Contributions:
                          </h4>
                          <ul className="space-y-2 ml-6">
                            {exp.responsibilities.map((responsibility, i) => (
                              <li key={i} className="text-[#e0e0e0] flex items-start gap-3 group/item">
                                <span className="text-[#ff6b35] mt-1.5 group-hover/item:scale-125 transition-transform">•</span>
                                <span className="flex-1">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Impact/Achievements (if available) */}
                      {exp.impact && (
                        <div className="pt-4 border-t border-orange-500/20">
                          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-500/5 to-transparent rounded-lg">
                            <div className="text-2xl">🎯</div>
                            <div>
                              <h4 className="text-sm font-semibold text-[#ff8c42] mb-1">Impact:</h4>
                              <p className="text-[#e0e0e0]">{exp.impact}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Right Corner Accent */}
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-orange-500/0 to-orange-500/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
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
            <div className="inline-flex items-center gap-4 glass-card rounded-2xl px-8 py-4 border-orange-glow">
              <Briefcase className="w-5 h-5 text-[#ff6b35]" />
              <p className="text-[#e0e0e0] font-medium">Growing with every challenge</p>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* Custom Animation for Progress Indicator */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(500%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;