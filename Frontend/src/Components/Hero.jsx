// components/Hero.js
import { useEffect, useState, useRef } from "react";
import { Download, Briefcase, Github, Linkedin, Code2, MapPin, Sparkles } from "lucide-react";
import resumeData from "../data/resumeData.json";
import TextType from "../animations/TextType";

const Hero = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #1a0f0a 0%, #000000 70%)' }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      ></div>

      {/* Dynamic Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[120px] transition-transform duration-[3000ms] ease-out"
          style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`, top: '10%', left: '5%' }}
        ></div>
        <div
          className="absolute w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] transition-transform duration-[3000ms] ease-out"
          style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)`, bottom: '10%', right: '10%' }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] bg-amber-500/8 rounded-full blur-[80px] float-animation"
          style={{ top: '50%', left: '50%' }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full animate-pulse"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 14}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Side - Content (7 cols) */}
          <div className={`lg:col-span-7 text-left space-y-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Status Badge */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full absolute inset-0 animate-ping"></div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Open to Work</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-3 h-3 text-[#a0a0a0]" />
                <span className="text-xs text-[#a0a0a0]">India</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <p className="text-[#a0a0a0] text-lg font-medium tracking-wide">Hey there, I'm</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white">{resumeData.personalInfo.name.split(' ')[0]}</span>
                <span className="block text-orange-gradient mt-1">{resumeData.personalInfo.name.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            {/* Typing Role */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px] bg-gradient-to-r from-[#ff6b35] to-transparent"></div>
              <TextType
                text={["Full Stack Developer", "Software Engineer", "MERN Stack Developer", "Problem Solver"]}
                className="text-xl sm:text-2xl text-[#e0e0e0] font-light"
                typingSpeed={60}
                deletingSpeed={35}
                pauseDuration={2500}
                cursorCharacter="_"
                cursorClassName="text-[#ff6b35] font-light"
              />
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#b0b0b0] max-w-lg leading-relaxed">
              Building <span className="text-white font-medium">scalable web applications</span> with modern tech stacks. Passionate about clean code, performance, and turning ideas into <span className="text-[#ff8c42] font-medium">reliable digital solutions</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={resumeData.personalInfo.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 min-h-[56px] flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff8c42] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Briefcase size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Let's Work Together</span>
              </a>
              <a
                href="/src/data/Sunny Kumar_Resume.pdf"
                download="Sunny_Kumar_Resume.pdf"
                className="group border border-[#ff6b35]/40 text-[#ff6b35] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#ff6b35]/10 hover:border-[#ff6b35]/70 min-h-[56px] flex items-center justify-center gap-3"
              >
                <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-5 pt-2">
              <span className="text-xs text-[#666] uppercase tracking-widest font-semibold">Find me</span>
              <div className="w-8 h-px bg-[#333]"></div>
              {[
                { icon: Github, href: resumeData.personalInfo.profiles.github, label: "GitHub" },
                { icon: Linkedin, href: resumeData.personalInfo.profiles.linkedin, label: "LinkedIn" },
                { icon: Code2, href: resumeData.personalInfo.profiles.leetcode, label: "LeetCode" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2.5 rounded-xl hover:bg-orange-500/10 transition-all duration-300"
                  title={label}
                >
                  <Icon className="w-5 h-5 text-[#666] group-hover:text-[#ff6b35] transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image (5 cols) */}
          <div className={`lg:col-span-5 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#ff6b35]/20 via-transparent to-[#d94f1f]/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Spinning border ring */}
              <div className="absolute -inset-[3px] rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'conic-gradient(from 0deg, #ff6b35, #d94f1f, transparent, transparent, #ff6b35)',
                  animation: 'spin 8s linear infinite',
                }}
              ></div>

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-2 border-black/50 z-10">
                <img
                  src="/ProfilePic.png"
                  alt={resumeData.personalInfo.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating tech badges around the circle */}
              <div className="absolute -top-2 -right-2 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-orange-500/30 text-xs font-semibold text-[#ff8c42] shadow-lg shadow-orange-500/10 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  React
                </div>
              </div>
              <div className="absolute -bottom-1 -left-3 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-orange-500/30 text-xs font-semibold text-[#ff8c42] shadow-lg shadow-orange-500/10 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                Node.js
              </div>
              <div className="absolute top-1/2 -right-6 z-20 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-orange-500/30 text-xs font-semibold text-[#ff8c42] shadow-lg shadow-orange-500/10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                MongoDB
              </div>

              {/* Experience badge */}
              {/* <div className="absolute -bottom-4 right-4 z-20 px-4 py-2 rounded-2xl bg-black/90 backdrop-blur-md border border-orange-500/30 shadow-xl shadow-orange-500/10">
                <div className="text-center">
                  <span className="text-2xl font-black text-orange-gradient">2+</span>
                  <p className="text-[10px] text-[#a0a0a0] uppercase tracking-wider font-semibold">Years Exp</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#ff6b35]/60 hover:text-[#ff6b35] transition-colors">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-[10px] uppercase tracking-[3px] font-semibold">Scroll</span>
          <div className="w-5 h-8 border border-current rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-current rounded-full mt-1.5 animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Spinning animation keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;