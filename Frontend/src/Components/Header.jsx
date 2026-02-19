// Header Component
import { useState, useEffect } from "react";
import { Home, Code2, FolderGit2, Mail, User, Menu, X, Download, Briefcase, BookOpen } from "lucide-react";
import resumeData from "../data/resumeData.json";

const Header = ({ darkMode, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get initials for logo
  const initials = resumeData.personalInfo.name
    .split(' ')
    .map(n => n[0])
    .join('');

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Blogs', href: '#blogs', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 backdrop-blur-lg bg-black/80 shadow-lg shadow-orange-500/10'
          : 'py-5 backdrop-blur-md bg-black/60'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="group relative"
            >
              <div className={`flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'
                }`}>
                <img src="/Logo.png" alt="Logo" className="w-12 h-12 rounded-full object-contain group-hover:scale-110 transition-all duration-300" />
                <span className="text-white font-bold text-xl hidden sm:block group-hover:text-orange-gradient transition-colors">
                  {resumeData.personalInfo.name.split(' ')[0]}
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Center/Right */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`group relative flex items-center gap-2 font-medium transition-all duration-300 ${isActive
                      ? 'text-[#ff6b35]'
                      : 'text-[#e0e0e0] hover:text-white'
                      }`}
                  >
                    <link.icon className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-[#ff6b35]' : 'group-hover:text-[#ff6b35]'
                      }`} />
                    <span className={isScrolled ? 'text-sm' : 'text-base'}>
                      {link.name}
                    </span>

                    {/* Hover Underline Animation */}
                    <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] transition-all duration-300 ${isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                      }`}></span>

                    {/* Active Glow */}
                    {isActive && (
                      <span className="absolute -inset-2 bg-orange-500/10 rounded-lg -z-10 animate-pulse"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={resumeData.personalInfo.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white font-semibold flex items-center gap-2 hover:from-[#ff8c42] hover:to-[#ff6b35] transition-all duration-300 transform hover:scale-105 orange-glow-hover ${isScrolled ? 'text-sm' : 'text-base'
                  }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
              <a
                href="/src/data/Sunny Kumar_Resume.pdf"
                download="Sunny_Kumar_Resume.pdf"
                className={`px-6 py-2.5 rounded-full border-2 border-[#ff6b35] text-[#ff6b35] font-semibold flex items-center gap-2 hover:bg-[#ff6b35]/10 transition-all duration-300 transform hover:scale-105 ${isScrolled ? 'text-sm' : 'text-base'
                  }`}
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-[#ff6b35] hover:bg-orange-500/30 transition-all"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-[#1a0f0a] to-black border-l border-orange-500/30 shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-8 space-y-8">
            {/* Mobile Logo */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img src="/Logo.png" alt="Logo" className="w-12 h-12 rounded-full object-contain" />
                <span className="text-white font-bold text-xl">
                  {resumeData.personalInfo.name.split(' ')[0]}
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-orange-500/20 text-[#ff6b35]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-4">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 transform ${isActive
                      ? 'bg-orange-500/20 border border-orange-500/50 text-[#ff6b35]'
                      : 'bg-white/5 border border-white/10 text-[#e0e0e0] hover:bg-orange-500/10 hover:border-orange-500/30'
                      }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-semibold">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="space-y-4 pt-4 border-t border-orange-500/20">
              <a
                href={resumeData.personalInfo.profiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white font-semibold flex items-center justify-center gap-2 hover:from-[#ff8c42] hover:to-[#ff6b35] transition-all duration-300 orange-glow-hover"
              >
                <Briefcase className="w-5 h-5" />
                <span>Hire Me</span>
              </a>
              <a
                href="/src/data/Sunny Kumar_Resume.pdf"
                download="Sunny_Kumar_Resume.pdf"
                className="w-full px-6 py-3 rounded-full border-2 border-[#ff6b35] text-[#ff6b35] font-semibold flex items-center justify-center gap-2 hover:bg-[#ff6b35]/10 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Additional Animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
