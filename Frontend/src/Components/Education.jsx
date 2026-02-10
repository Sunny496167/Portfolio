// Education Section Component
import { Calendar } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import ScrollReveal from "../animations/ScrollReveal";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Education = ({ darkMode }) => {
  const education = [
    {
      degree: resumeData.education.degree,
      institution: resumeData.education.institution,
      year: resumeData.education.expectedGraduation,
      description: `CGPA: ${resumeData.education.cgpa}`
    }
  ];

  return (
    <section id="education" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={1}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </FadeContent>

        <div className="relative">
          <AnimatedContent
            distance={100}
            direction="vertical"
            duration={1}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            delay={0.5}
          >
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          </AnimatedContent>

          {education.map((edu, index) => (
            <AnimatedContent
              key={index}
              distance={80}
              direction="horizontal"
              reverse={index % 2 === 0}
              duration={0.8}
              ease="back.out(1.7)"
              initialOpacity={0}
              animateOpacity
              scale={0.9}
              delay={0.7 + (index * 0.2)}
              threshold={0.3}
            >
              <div className="relative mb-12 ml-12 md:ml-0">
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-4 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 ${darkMode ? 'border-gray-800' : 'border-gray-50'}`}></div>

                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                  <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                    <div className="flex items-center mb-2">
                      <Calendar className="text-blue-500 mr-2" size={16} />
                      <span className={`text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                        {edu.year}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      {edu.institution}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;