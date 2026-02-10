// components/Hero.js
import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedText from "../animations/AnimatedText";
import resumeData from "../data/resumeData.json";


const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { Icon: Github, href: resumeData.personalInfo.profiles.github, label: "GitHub" },
    { Icon: Linkedin, href: resumeData.personalInfo.profiles.linkedin, label: "LinkedIn" },
    { Icon: Mail, href: `mailto:${resumeData.personalInfo.email}`, label: "Email" }
  ];

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 pt-16 ${darkMode
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeContent duration={1000} delay={200}>
          <div className="mb-8">
            {/* Animated Profile Picture */}
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className={`w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 ${isVisible ? 'animate-spin' : ''
                }`} style={{ animationDuration: '8s' }}>
                <div className={`w-full h-full rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'
                  } flex items-center justify-center`}>
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                    SK
                  </div>
                </div>
              </div>
            </div>


            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {resumeData.personalInfo.name}
            </h1>


            {/* Animated Role Text */}
            <div className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
              <AnimatedText text="Full-Stack Developer" delay={150} />
            </div>

            {/* Description */}
            <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {resumeData.summary}
            </p>
          </div>
        </FadeContent>

        {/* Action Buttons */}
        <FadeContent duration={1000} delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 sm:py-3 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 min-h-[44px]">
              <div className="flex items-center space-x-2">
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download CV</span>
              </div>
            </button>
            <button className={`w-full sm:w-auto group border-2 px-8 py-4 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 min-h-[44px] ${darkMode
              ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
              : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}>
              Get In Touch
            </button>
          </div>
        </FadeContent>

        {/* Social Links */}
        <FadeContent duration={1000} delay={1200}>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${darkMode
                  ? 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon size={24} className="group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </FadeContent>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;