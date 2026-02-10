// Premium Loading Preloader Component
import { useState, useEffect } from "react";

const LoadingPreloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(() => onComplete(), 500);
                    }, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0f0a] to-black"></div>

            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">

                {/* 3D Developer Illustration Container */}
                <div className="relative mb-12">
                    {/* Main Avatar */}
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] flex items-center justify-center text-6xl font-bold text-white shadow-2xl orange-glow animate-float">
                            👨‍💻
                        </div>

                        {/* Pulsing Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-orange-500/40 animate-ping"></div>
                    </div>

                    {/* Floating Tech Icons */}
                    {/* JavaScript Icon - Top Left */}
                    <div
                        className="absolute -top-8 -left-8 w-12 h-12 glass-card rounded-xl flex items-center justify-center orange-glow-sm"
                        style={{ animation: 'float 3s ease-in-out infinite' }}
                    >
                        <span className="text-2xl font-bold text-yellow-400">JS</span>
                    </div>

                    {/* React Icon - Top Right */}
                    <div
                        className="absolute -top-8 -right-8 w-12 h-12 glass-card rounded-xl flex items-center justify-center orange-glow-sm"
                        style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}
                    >
                        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.87S13.03 13.85 12 13.85s-1.87-.84-1.87-1.87S10.97 10.11 12 10.11M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                        </svg>
                    </div>

                    {/* Node.js Icon - Bottom */}
                    <div
                        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 glass-card rounded-xl flex items-center justify-center orange-glow-sm"
                        style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}
                    >
                        <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47-.02-.12-.11-.21-.22-.21h-.97c-.12 0-.22.11-.22.22 0 1.32.72 2.88 3.96 2.88 2.37 0 3.74-.93 3.74-2.55 0-1.61-1.08-2.03-3.35-2.34-2.26-.3-2.57-.46-2.57-1-.03-.5.2-1.16 1.97-1.16 1.57 0 2.15.34 2.39 1.41.02.11.11.19.22.19h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.57 8.99 16.17 8 14 8z" />
                        </svg>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">
                        Loading Experience
                    </h2>
                    <p className="text-[#a0a0a0] text-sm">Crafting premium portfolio...</p>
                </div>

                {/* Circular Progress Loader */}
                <div className="relative w-32 h-32 mb-6">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="rgba(255, 107, 53, 0.2)"
                            strokeWidth="4"
                            fill="none"
                        />
                        {/* Progress Circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 56}`}
                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                            className="transition-all duration-300 ease-out"
                            style={{
                                filter: 'drop-shadow(0 0 8px rgba(255, 107, 53, 0.6))'
                            }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ff8c42" />
                                <stop offset="100%" stopColor="#ff6b35" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Percentage Counter */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-orange-gradient">
                            {progress}%
                        </span>
                    </div>
                </div>

                {/* Loading Dots */}
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default LoadingPreloader;
