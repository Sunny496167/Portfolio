// Premium Scroll to Top Button Component
import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const throttleTimeout = useRef(null);

    // Throttled scroll handler for performance
    useEffect(() => {
        const handleScroll = () => {
            // Throttle for performance
            if (throttleTimeout.current) return;

            throttleTimeout.current = setTimeout(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (scrollTop / docHeight) * 100;

                setScrollProgress(scrollPercentage);
                setIsVisible(scrollTop > 300);

                throttleTimeout.current = null;
            }, 50); // 50ms throttle
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
        };
    }, []);

    // Scroll to top with animation
    const scrollToTop = () => {
        setIsAnimating(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Reset animation state after scroll
        setTimeout(() => setIsAnimating(false), 1000);
    };

    // Calculate circle stroke offset for progress ring
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeOffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <>
            <button
                onClick={scrollToTop}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className={`fixed z-50 group transition-all duration-500 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                        : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
                    } ${isAnimating ? 'animate-pulse' : ''
                    }
        bottom-6 right-6 sm:bottom-8 sm:right-8
        w-14 h-14 sm:w-16 sm:h-16
        hover:scale-110 hover:rotate-6 active:scale-95
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
                aria-label="Scroll to top"
            >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 rounded-full glass-card backdrop-blur-md bg-black/60 border-2 border-orange-500/40 shadow-lg group-hover:border-orange-500/60 group-hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all duration-300">
                    {/* Inner Glow */}
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* SVG Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    {/* Background Circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="rgba(255, 107, 53, 0.15)"
                        strokeWidth="2"
                        fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="url(#progressGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeOffset}
                        className="transition-all duration-300 ease-out"
                        style={{
                            filter: 'drop-shadow(0 0 6px rgba(255, 107, 53, 0.8))'
                        }}
                    />
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff8c42" />
                            <stop offset="100%" stopColor="#ff6b35" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Arrow Icon with Upward Animation */}
                <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isAnimating ? 'animate-bounce' : 'group-hover:-translate-y-1'
                    }`}>
                    <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff6b35] group-hover:text-[#ff8c42] transition-colors" />
                </div>

                {/* Pulse Effect When Idle */}
                {isVisible && !isAnimating && (
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/40 animate-ping opacity-75"></div>
                )}
            </button>

            {/* Tooltip */}
            {showTooltip && isVisible && (
                <div className="fixed bottom-20 sm:bottom-24 right-6 sm:right-8 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200">
                    <div className="glass-card px-3 py-1.5 rounded-lg border border-orange-500/30 backdrop-blur-md">
                        <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                            Back to top
                        </span>
                        {/* Tooltip Arrow */}
                        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-[#1a0f0a] border-r border-b border-orange-500/30 transform rotate-45"></div>
                    </div>
                </div>
            )}

            {/* Mobile-Optimized Styles */}
            <style jsx>{`
        @media (max-width: 640px) {
          /* Reduce animations on mobile for performance */
          button {
            transition-duration: 300ms;
          }
          
          /* Disable rotation on mobile for better touch interaction */
          button:hover {
            transform: scale(1.05);
          }
        }

        /* GPU Acceleration */
        button {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform, opacity;
        }

        /* Custom animation for tooltip */
        @keyframes slide-in-from-bottom {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: slide-in-from-bottom 0.2s ease-out;
        }
      `}</style>
        </>
    );
};

export default ScrollToTop;
