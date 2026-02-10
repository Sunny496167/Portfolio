// Skills Section Component
import { Code, Database, Wrench } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", color: "#e34f26", logo: "HTML" },
        { name: "CSS", color: "#1572b6", logo: "CSS" },
        { name: "JavaScript", color: "#f7df1e", logo: "JS", textColor: "#000" },
        { name: "React", color: "#61dafb", logo: "⚛", textColor: "#282c34" },
        { name: "TypeScript", color: "#3178c6", logo: "TS" },
        { name: "Tailwind CSS", color: "#06b6d4", logo: "TW" }
      ]
    },
    {
      icon: Database,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", color: "#68a063", logo: "Node" },
        { name: "Express", color: "#ffffff", logo: "Ex", textColor: "#000" },
        { name: "NestJS", color: "#e0234e", logo: "Nest" },
        { name: "MongoDB", color: "#47a248", logo: "M" },
        { name: "PostgreSQL", color: "#336791", logo: "PG" },
        { name: "REST API", color: "#ff6b35", logo: "API" }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", color: "#f05032", logo: "Git" },
        { name: "Docker", color: "#2496ed", logo: "🐳" },
        { name: "AWS", color: "#ff9900", logo: "AWS", textColor: "#000" },
        { name: "Postman", color: "#ff6c37", logo: "PM" },
        { name: "VS Code", color: "#007acc", logo: "VS" },
        { name: "Linux", color: "#fcc624", logo: "🐧", textColor: "#000" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        {/* Animated dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-orange-gradient">Technology</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>
        </FadeContent>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedContent
              key={categoryIndex}
              distance={60}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.2 + (categoryIndex * 0.2)}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#ff6b35] to-transparent rounded-full mt-1"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-300 rounded-2xl"></div>

                      {/* Top accent line that appears on hover */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                      <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                        {/* Icon/Logo */}
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                          style={{
                            backgroundColor: skill.color,
                            color: skill.textColor || '#ffffff'
                          }}
                        >
                          {skill.logo}
                        </div>

                        {/* Skill Name */}
                        <p className="text-white font-semibold text-center group-hover:text-orange-gradient transition-all duration-300">
                          {skill.name}
                        </p>
                      </div>

                      {/* Animated dots on hover */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
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
            <div className="glass-card inline-block rounded-2xl p-8 border-orange-glow">
              <p className="text-[#e0e0e0] text-lg mb-4">
                Always learning and exploring new technologies
              </p>
              <div className="flex gap-2 justify-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Skills;