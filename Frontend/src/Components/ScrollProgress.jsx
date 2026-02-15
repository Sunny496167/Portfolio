// Custom Side Scrollbar Component
import { useState, useEffect } from "react";
import { Home, Code2, Mail, User, Briefcase, Award } from "lucide-react";

const ScrollProgress = ({ activeSection }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [hoveredSection, setHoveredSection] = useState(null);

    // Track scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Show scrolling indicator
            setIsScrolling(true);
            const timer = setTimeout(() => setIsScrolling(false), 1000);
            return () => clearTimeout(timer);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Section indicators
    const sections = [
        { id: 'hero', icon: Home, label: 'Home' },
        { id: 'about', icon: User, label: 'About' },
        { id: 'skills', icon: Code2, label: 'Skills' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: Award, label: 'Projects' },
        { id: 'contact', icon: Mail, label: 'Contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
            <div className="relative">
                {/* Scroll Track with Glassmorphism */}
                <div className="w-1 h-64 rounded-full bg-black/40 backdrop-blur-sm border border-orange-500/20 relative overflow-hidden">
                    {/* Progress Fill */}
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#ff6b35] to-[#ff8c42] rounded-full transition-all duration-300"
                        style={{ height: `${scrollProgress}%` }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff6b35]/60 to-transparent animate-pulse"></div>
                    </div>

                    {/* Scroll Thumb with Glow */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-8 rounded-full bg-gradient-to-b from-[#ff8c42] to-[#ff6b35] border border-orange-500/50 shadow-[0_0_20px_rgba(255,107,53,0.6)] hover:shadow-[0_0_30px_rgba(255,107,53,0.8)] transition-all duration-300"
                        style={{ top: `${scrollProgress}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                    >
                        {/* Inner Glow */}
                        <div className={`absolute inset-0 rounded-full bg-white/20 ${isScrolling ? 'animate-pulse' : ''}`}></div>
                    </div>
                </div>

                {/* Section Indicators */}
                <div className="absolute -left-8 top-0 h-full flex flex-col justify-around">
                    {sections.map((section, index) => {
                        const isActive = activeSection === section.id;
                        const Icon = section.icon;

                        return (
                            <div
                                key={section.id}
                                className="relative group"
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                            >
                                {/* Dot Indicator */}
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] scale-125 shadow-[0_0_12px_rgba(255,107,53,0.8)]'
                                        : 'bg-orange-500/30'
                                        } ${isActive && isScrolling ? 'animate-pulse' : ''}`}
                                    style={{ transform: isActive ? undefined : 'none' }}
                                    aria-label={`Scroll to ${section.label}`}
                                >
                                    {/* Active Pulse Ring */}
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-full bg-orange-500/50 animate-ping"></span>
                                    )}
                                </button>

                                {/* Section Label on Hover */}
                                <div
                                    className={`absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-300 ${hoveredSection === section.id || isActive
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-4 pointer-events-none'
                                        }`}
                                >
                                    <div className="glass-card rounded-lg px-3 py-2 flex items-center gap-2 whitespace-nowrap border-orange-glow">
                                        <Icon className="w-4 h-4 text-[#ff6b35]" />
                                        <span className="text-sm font-semibold text-white">{section.label}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Scroll Percentage Indicator (Bottom) */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="glass-card rounded-full px-2 py-1 border-orange-glow">
                        <span className="text-xs font-bold text-orange-gradient">
                            {Math.round(scrollProgress)}%
                        </span>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
    );
};

export default ScrollProgress;
