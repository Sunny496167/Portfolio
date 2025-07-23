// components/About.js
import { Code, Server, Database } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedCounter from "../animations/AnimatedCounter";

const About = ({ darkMode }) => {
  const skills = [
    {
      Icon: Code,
      title: "Frontend Development",
      description: "React, Vue, Angular",
      color: "text-blue-500"
    },
    {
      Icon: Server,
      title: "Backend Development", 
      description: "Node.js, Python, Java",
      color: "text-green-500"
    },
    {
      Icon: Database,
      title: "Database Management",
      description: "MongoDB, PostgreSQL, MySQL",
      color: "text-purple-500"
    }
  ];

  const stats = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 25, suffix: "+" },
    { label: "Code Commits", value: 1000, suffix: "+" }
  ];

  const personalInfo = [
    { label: "Location", value: "New York, USA" },
    { label: "Experience", value: "3+ Years" },
    { label: "Email", value: "john@example.com" },
    { label: "Phone", value: "+1 (555) 123-4567" }
  ];

  return (
    <section id="about" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeContent duration={1000} delay={200}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </FadeContent>
        
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <FadeContent duration={1000} delay={400}>
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate Full-Stack Developer with over 3 years of experience in creating 
                dynamic and responsive web applications. I specialize in modern JavaScript frameworks 
                and have a strong foundation in both frontend and backend technologies.
              </p>
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My journey in web development started with a curiosity about how websites work, 
                and it has evolved into a career focused on creating meaningful digital experiences 
                that solve real-world problems.
              </p>

              {/* Personal Information Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {personalInfo.map((info, index) => (
                  <FadeContent key={info.label} duration={800} delay={600 + index * 100}>
                    <div>
                      <h4 className={`font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.label}
                      </h4>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </div>
          </FadeContent>
          
          {/* Right Column - Skills Card */}
          <FadeContent duration={1000} delay={600}>
            <div className={`rounded-2xl overflow-hidden shadow-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'
            } p-8 transform hover:scale-105 transition-transform duration-300`}>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <FadeContent key={skill.title} duration={800} delay={800 + index * 200}>
                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-opacity-50 transition-all duration-300 hover:transform hover:scale-105">
                      <skill.Icon className={`${skill.color} transition-transform duration-300 hover:rotate-12`} size={28} />
                      <div>
                        <h4 className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.title}
                        </h4>
                        <p className={`text-sm ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Statistics Section */}
        <FadeContent duration={1000} delay={1000}>
          <div className={`rounded-2xl p-8 ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-gray-700' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <FadeContent duration={1000} delay={1200 + index * 100}>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2000}
                        delay={1200 + index * 100}
                      />
                    </div>
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </p>
                  </FadeContent>
                </div>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default About;