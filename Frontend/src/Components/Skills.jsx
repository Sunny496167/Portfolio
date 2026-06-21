// Skills Section Component
import { Code, Database, Wrench, Terminal } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Terminal,
      title: "Programming Languages",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "JavaScript", image: "/javascript.png", color: "#f7df1e" },
        { name: "TypeScript", image: "/typescript.png", color: "#3178c6" },
        { name: "Python", image: "/python.png", color: "#3776ab" },
        { name: "Java", image: "/java.png", color: "#ed8b00" },
        { name: "C++", image: "/C++.png", color: "#00599c" },
      ],
    },
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML", image: "/html.webp", color: "#e34f26" },
        { name: "CSS", image: "/CSS.webp", color: "#1572b6" },
        { name: "Tailwind CSS", image: "/tailwind-css.png", color: "#06b6d4" },
        { name: "React", image: "/react.png", color: "#61dafb" },
        { name: "Next.js", image: "/Next.png", color: "#a0a0a0" },
      ],
    },
    {
      icon: Database,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", image: "/nodejs.png", color: "#68a063" },
        { name: "Express", image: "/Express.png", color: "#a0a0a0" },
        { name: "NestJS", image: "/nestjs.png", color: "#e0234e" },
        { name: "Fastify", image: "/Fastify.png", color: "#a0a0a0" },
        { name: "MongoDB", image: "/MongoDB.png", color: "#47a248" },
        { name: "MySQL", image: "/MySQL.png", color: "#00758f" },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", image: "/Git.webp", color: "#f05032" },
        { name: "GitHub", image: "/Github.webp", color: "#a0a0a0" },
        { name: "Docker", image: "/Docker.webp", color: "#2496ed" },
        { name: "AWS", image: "/AWS.png", color: "#ff9900" },
        { name: "Postman", image: "/Postman.png", color: "#ff6c37" },
        { name: "VS Code", image: "/VS Code.png", color: "#007acc" },
        { name: "Linux", image: "/Linux.png", color: "#fcc624" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden"
    >
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
        {/* Animated dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-orange-500 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-2 h-2 bg-orange-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-40 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "1s" }}
        ></div>
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
        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedContent
              key={categoryIndex}
              distance={60}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.2 + categoryIndex * 0.15}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-3.5 bg-gradient-to-br ${category.color} rounded-2xl shadow-lg`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#ff6b35] to-transparent rounded-full mt-1"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
                      style={{
                        borderBottom: `3px solid transparent`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderBottomColor = skill.color;
                        e.currentTarget.style.boxShadow = `0 8px 30px ${skill.color}22`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderBottomColor = "transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-orange-500/5 transition-all duration-300 rounded-2xl"></div>

                      {/* Top accent line that appears on hover */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                      <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                        {/* Skill Icon */}
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden p-1.5">
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-full h-full object-contain drop-shadow-lg"
                            loading="lazy"
                          />
                        </div>

                        {/* Skill Name */}
                        <p className="text-sm text-[#c0c0c0] font-medium text-center group-hover:text-white transition-all duration-300">
                          {skill.name}
                        </p>
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
                <div
                  className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Skills;