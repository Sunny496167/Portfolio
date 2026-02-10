// Achievements Section Component
import { Award } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import ScrollReveal from "../animations/ScrollReveal";
import AnimatedContent from "../animations/AnimatedContent";
import Magnet from "../animations/Magnet";
import resumeData from "../data/resumeData.json";

const Achievements = ({ darkMode }) => {
  const achievements = resumeData.leadership.map(item => {
    if (item.title === "Tech Team Lead") {
      return {
        title: item.title,
        organization: item.organization,
        year: "2024-Present",
        description: item.achievements.join(", ")
      };
    } else {
      return {
        title: item.title,
        organization: "Board Examination",
        year: "2022",
        description: item.achievement
      };
    }
  });

  console.log('Leadership Data:', resumeData.leadership);
  console.log('Mapped Achievements:', achievements);
  console.log('Achievements Length:', achievements.length);

  return (
    <section id="achievements" className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <FadeContent blur={false} duration={1200} easing="ease-out" initialOpacity={1}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Achievements & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </div>
        </FadeContent>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedContent
              key={index}
              distance={100}
              direction="vertical"
              duration={0.8}
              ease="bounce.out"
              initialOpacity={0.5}
              animateOpacity
              scale={0.95}
              delay={0.1 + (index * 0.1)}
              threshold={0.01}
            >
              <Magnet padding={30} magnetStrength={25}>
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                        <Award className="text-white" size={24} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-500 transition-all duration-300`}>
                          {achievement.title}
                        </h3>
                        <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-600'} transform group-hover:scale-110 transition-transform duration-300`}>
                          {achievement.year}
                        </span>
                      </div>

                      <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-yellow-300' : 'text-yellow-600'} group-hover:text-orange-400 transition-colors duration-300`}>
                        {achievement.organization}
                      </h4>

                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} group-hover:text-opacity-90 transition-all duration-300`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Magnet>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;