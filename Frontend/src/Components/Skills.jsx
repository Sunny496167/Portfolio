// Skills Section Component
import { useState, useRef, useEffect } from "react";
import { Code, Server, Database, Wrench } from "lucide-react";

// FadeContent Component
const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = 'ease-out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = ''
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

// AnimatedContent Component
const AnimatedContent = ({
  children,
  distance = 150,
  direction = "vertical",
  reverse = false,
  duration = 1.2,
  ease = "ease-out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.2,
  delay = 0,
  className = ""
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(ref.current);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, delay]);

  const getTransform = () => {
    if (inView) return `scale(${scale})`;
    
    const multiplier = reverse ? -1 : 1;
    if (direction === "horizontal") {
      return `translateX(${distance * multiplier}px) scale(${scale})`;
    }
    return `translateY(${distance * multiplier}px) scale(${scale})`;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: animateOpacity ? (inView ? 1 : initialOpacity) : 1,
        transform: getTransform(),
        transition: `all ${duration}s ${ease}`,
      }}
    >
      {children}
    </div>
  );
};

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "Express.js", level: 90 },
        { name: "Django", level: 82 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 83 },
        { name: "Redis", level: 78 },
        { name: "Firebase", level: 85 },
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 82 },
        { name: "AWS", level: 78 },
        { name: "Jenkins", level: 75 },
        { name: "Webpack", level: 85 },
      ]
    }
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <FadeContent duration={1000} delay={200}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </FadeContent>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedContent
              key={categoryIndex}
              distance={100}
              direction="vertical"
              duration={1}
              delay={categoryIndex * 200}
              threshold={0.1}
            >
              <div
                className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full`}
              >
                <div className="flex items-center mb-6">
                  <category.icon className="text-blue-500 mr-3 transition-transform duration-300 hover:rotate-12" size={24} />
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <FadeContent
                      key={skillIndex}
                      duration={800}
                      delay={600 + categoryIndex * 200 + skillIndex * 100}
                    >
                      <div
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                          <span className={`text-sm ${hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${600 + categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    </FadeContent>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;