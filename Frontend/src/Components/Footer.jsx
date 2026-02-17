// Footer Component
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Heart, Code2, Home, FolderGit2, User } from "lucide-react";
import SpotlightCard from "../animations/SpotlightCard";
import resumeData from "../data/resumeData.json";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  // Get initials for logo
  const initials = resumeData.personalInfo.name
    .split(' ')
    .map(n => n[0])
    .join('');

  const quickLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.personalInfo.email,
      href: `mailto:${resumeData.personalInfo.email}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India"
    },
    {
      icon: Phone,
      label: "Availability",
      value: "Open to opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: resumeData.personalInfo.profiles.github,
      color: "hover:text-white hover:bg-white/10"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: resumeData.personalInfo.profiles.linkedin,
      color: "hover:text-blue-500 hover:bg-blue-500/10"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-sky-500 hover:bg-sky-500/10"
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-[#1a0f0a] to-black overflow-hidden">
      {/* Top Orange Accent Line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>

      {/* Animated Background Gradient Shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-500/0 animate-gradient-shift"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <SpotlightCard className="glass-card rounded-2xl p-6 h-full">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <img src="/Logo.png" alt="Logo" className="w-12 h-12 rounded-xl object-contain" />
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {resumeData.personalInfo.name.split(' ')[0]}
                  </h3>
                  <p className="text-xs text-[#a0a0a0]">Developer</p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                Building innovative solutions with modern technologies and clean code.
              </p>

              {/* Developer Icon */}
              <div className="flex items-center gap-2 text-[#ff6b35]">
                <Code2 className="w-4 h-4" />
                <span className="text-xs font-semibold">Full Stack Developer</span>
              </div>
            </SpotlightCard>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <SpotlightCard className="glass-card rounded-2xl p-6 h-full">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#ff6b35] to-[#d94f1f] rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#ff6b35] transition-all duration-300 group relative"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 group-hover:text-[#ff6b35] transition-all duration-300" />
                      <span className="text-sm relative">
                        {link.name}
                        {/* Underline Reveal Animation */}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <SpotlightCard className="glass-card rounded-2xl p-6 h-full">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#ff6b35] to-[#d94f1f] rounded-full"></span>
                Contact Info
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-start gap-3 text-[#a0a0a0] hover:text-[#ff6b35] transition-all duration-300 group"
                      >
                        <div className="relative">
                          <info.icon className="w-4 h-4 mt-0.5 group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#808080] group-hover:text-[#a0a0a0] transition-colors">{info.label}</p>
                          <p className="text-sm group-hover:text-[#ff6b35] transition-colors">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 text-[#a0a0a0] group">
                        <info.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#ff6b35]/50" />
                        <div>
                          <p className="text-xs text-[#808080]">{info.label}</p>
                          <p className="text-sm">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <SpotlightCard className="glass-card rounded-2xl p-6 h-full">
              <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#ff6b35] to-[#d94f1f] rounded-full"></span>
                Follow Me
              </h4>
              <p className="text-[#a0a0a0] text-sm mb-4">
                Connect with me on social media
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#ff6b35] transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-6 hover:shadow-[0_0_20px_rgba(255,107,53,0.6)] ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 transition-transform duration-300" />
                  </a>
                ))}
              </div>

              {/* Additional Social Info */}
              <div className="mt-6 pt-4 border-t border-orange-500/20">
                <p className="text-xs text-[#a0a0a0]">
                  Open for collaborations and opportunities
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Bottom Bar */}
        <SpotlightCard className="glass-card rounded-2xl p-6 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-[#a0a0a0] text-sm text-center md:text-left">
              © {currentYear} {resumeData.personalInfo.name}. All rights reserved.
            </p>

            {/* Built with Love */}
            <p className="text-[#a0a0a0] text-sm flex items-center gap-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>by</span>
              <span className="text-[#ff6b35] font-semibold">
                {resumeData.personalInfo.name.split(' ')[0]}
              </span>
            </p>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#a0a0a0]">Powered by</span>
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-[#ff6b35] font-semibold">
                React + Tailwind
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Bottom Orange Accent Line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent"></div>

      {/* Custom CSS for Micro-interactions */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(0) translateY(0);
          }
          25% {
            opacity: 0.5;
            transform: translateX(10px) translateY(-10px);
          }
          50% {
            opacity: 0.4;
            transform: translateX(-10px) translateY(10px);
          }
          75% {
            opacity: 0.6;
            transform: translateX(5px) translateY(5px);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;