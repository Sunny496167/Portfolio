// Experience Section Component
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import resumeData from '../data/resumeData.json';

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

const Experience = ({ darkMode }) => {
  const experiences = resumeData.internships.map(internship => ({
    title: internship.title,
    company: internship.company,
    period: internship.duration,
    location: internship.location,
    responsibilities: internship.responsibilities
  }));

  return (
    <section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <FadeContent duration={1000} delay={200}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </FadeContent>

        <div className="relative">
          <FadeContent duration={1500} delay={400}>
            <div className="absolute left-4 md:left-8 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          </FadeContent>

          {experiences.map((exp, index) => (
            <AnimatedContent
              key={index}
              distance={120}
              direction={index % 2 === 0 ? "horizontal" : "horizontal"}
              reverse={index % 2 === 0 ? false : true}
              duration={1}
              delay={600 + index * 300}
              threshold={0.1}
              className="relative pl-16 pb-12"
            >
              <div className={`absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 ${darkMode ? 'border-gray-800' : 'border-gray-50'} flex items-center justify-center`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                    {exp.period}
                  </span>
                </div>

                <div className="flex items-center mb-4 space-x-4">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    {exp.company}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <FadeContent
                      key={idx}
                      duration={600}
                      delay={800 + index * 300 + idx * 100}
                    >
                      <li className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <ChevronRight size={16} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                        {responsibility}
                      </li>
                    </FadeContent>
                  ))}
                </ul>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;