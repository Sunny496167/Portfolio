// components/Hero.js
import { useEffect, useState } from "react";
import { Download, Briefcase } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import resumeData from "../data/resumeData.json";
import TextType from "../animations/TextType";

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-black via-[#1a0f0a] to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl float-animation"></div>

        {/* Curved Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-orange-500/10 to-transparent"></div>

        {/* Light Streaks */}
        <div className="absolute top-0 right-1/4 w-1 h-64 bg-gradient-to-b from-orange-500/20 to-transparent blur-sm"></div>
        <div className="absolute bottom-0 left-1/3 w-1 h-48 bg-gradient-to-t from-orange-500/20 to-transparent blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className={`text-left space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Headline */}
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white mb-2">Hey, I'm</span>
                <span className="block text-orange-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  {resumeData.personalInfo.name}
                </span>
                <TextType text={["Software Developer", "Web Developer"]} />
              </h3>

              <p className="text-lg sm:text-xl text-[#e0e0e0] max-w-xl leading-relaxed mt-6">
                {resumeData.summary}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={resumeData.personalInfo.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange-gradient text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 min-h-[56px] group flex items-center justify-center gap-3"
              >
                <Briefcase size={22} className="group-hover:rotate-12 transition-transform" />
                <span>Hire Me</span>
              </a>
              <a
                href="/src/data/Sunny Kumar_Resume.pdf"
                download="Sunny_Kumar_Resume.pdf"
                className="border-2 border-[#ff6b35] text-[#ff6b35] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#ff6b35]/10 min-h-[56px] orange-glow-hover flex items-center justify-center gap-3"
              >
                <Download size={22} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Side - 3D Illustration with Floating Icons */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* 3D Developer Illustration Container */}
            <div className="relative w-full max-w-lg mx-auto">

              {/* BACKEND ICONS (Behind the card - z-0) */}
              {/* Node.js Icon - Bottom Left (Behind) */}
              <div className="absolute bottom-4 left-4 z-20 glass-card p-4 rounded-2xl orange-glow-sm float-animation" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                <div className="w-16 h-16 bg-[#68a063] rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.77.21s.53-.07.77-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2z" />
                  </svg>
                </div>
              </div>

              {/* HTML Icon - Bottom Right (Behind) */}
              <div className="absolute bottom-4 right-4 z-20 glass-card p-4 rounded-2xl orange-glow-sm float-animation" style={{ animationDelay: '1.5s', animationDuration: '3.2s' }}>
                <div className="w-16 h-16 bg-[#e34f26] rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">HTML</span>
                </div>
              </div>

              {/* MAIN CARD (Middle layer - z-10) */}
              <div className="relative z-10 glass-card rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                  {/* Head */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] flex items-center justify-center text-5xl font-bold text-white shadow-2xl orange-glow">
                    {resumeData.personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Body with Laptop */}
                  <div className="relative">
                    <div className="w-48 h-32 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-lg border-2 border-orange-500/30 shadow-xl">
                      {/* Laptop Screen */}
                      <div className="w-full h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-t-lg p-3">
                        <div className="w-full h-full bg-black/50 rounded-sm flex items-center justify-center">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                      {/* Keyboard */}
                      <div className="px-3 py-2">
                        <div className="grid grid-cols-8 gap-1">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-700 rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-orange-500 font-medium">Building Digital Experiences</p>
                </div>
              </div>

              {/* FRONTEND ICONS (In front of card - z-20) */}
              {/* JavaScript Icon - Top Left (Front) */}
              <div className="absolute top-4 left-4 z-20 glass-card p-4 rounded-2xl orange-glow-sm float-animation" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <div className="w-16 h-16 bg-[#f7df1e] rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-2xl">JS</span>
                </div>
              </div>

              {/* React Icon - Top Right (Front) */}
              <div className="absolute top-4 right-4 z-20 glass-card p-4 rounded-2xl orange-glow-sm float-animation" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>
                <div className="w-16 h-16 bg-[#61dafb] rounded-lg flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 text-[#282c34]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#ff6b35]">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;