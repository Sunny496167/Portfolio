// Education Section Component
import { GraduationCap, Building2, Calendar } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Education = ({ darkMode }) => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Education <span className="text-orange-gradient">&</span> Qualifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4">
              My academic journey and achievements
            </p>
          </div>
        </FadeContent>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line with Orange Glow */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] transform md:-translate-x-1/2 orange-glow-sm"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {resumeData.education.map((edu, index) => (
              <AnimatedContent
                key={edu.id}
                distance={80}
                direction="horizontal"
                reverse={index % 2 === 0}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                delay={0.2 + (index * 0.2)}
                threshold={0.2}
              >
                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot with Orange Glow */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] border-4 border-black shadow-lg orange-glow pulse-glow"></div>
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    {/* Education Card */}
                    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                      {/* Top Orange Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                      {/* Card Content */}
                      <div className="space-y-4">
                        {/* Header with Graduation Cap Icon */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl group-hover:orange-glow-sm transition-all duration-300">
                            <GraduationCap className="w-6 h-6 text-[#ff6b35]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white group-hover:text-orange-gradient transition-colors">
                              {edu.degree}
                            </h3>
                            {edu.grade && (
                              <p className="text-[#ff6b35] font-semibold mt-1">
                                {edu.grade}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Institution */}
                        <div className="flex items-center gap-3 text-[#e0e0e0]">
                          <Building2 className="w-5 h-5 text-[#a0a0a0]" />
                          <p className="font-medium">{edu.institution}</p>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-[#a0a0a0]" />
                          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-orange-500/20 text-[#ff8c42] border border-orange-500/30">
                            {edu.duration}
                          </span>
                        </div>

                        {/* Highlights (if any) */}
                        {edu.highlights && (
                          <div className="pt-3 border-t border-orange-500/20">
                            <h4 className="text-sm font-semibold text-[#a0a0a0] mb-2">Highlights:</h4>
                            <ul className="space-y-1">
                              {edu.highlights.map((highlight, i) => (
                                <li key={i} className="text-sm text-[#e0e0e0] flex items-start gap-2">
                                  <span className="text-[#ff6b35] mt-1">•</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Hover Effect - Corner Accent */}
                      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-500/0 to-orange-500/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Connecting Line from Dot to Card */}
                    <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'left-1/2 ml-3' : 'right-1/2 mr-3'} w-12 h-0.5 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-[#ff6b35] to-transparent`}></div>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
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
            <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 border-orange-glow">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <p className="text-[#e0e0e0] font-medium">Continuous Learning Journey</p>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Education;