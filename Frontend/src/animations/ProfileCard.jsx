import { useRef, useState, useEffect } from "react";
import { MapPin, Github, Linkedin, Code2, Mail } from "lucide-react";
import resumeData from "../data/resumeData.json";

const ProfileCard = () => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
        setRotation({ x: rotateX, y: rotateY });
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    const { personalInfo } = resumeData;
    const initials = personalInfo.name.split(" ").map((n) => n[0]).join("");

    const socialLinks = [
        { icon: Github, href: personalInfo.profiles.github, label: "GitHub" },
        { icon: Linkedin, href: personalInfo.profiles.linkedin, label: "LinkedIn" },
        { icon: Code2, href: personalInfo.profiles.leetcode, label: "LeetCode" },
        { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    ];

    const stats = [
        { value: "11+", label: "Projects" },
        { value: "2", label: "Internships" },
        { value: "3+", label: "Freelance" },
    ];

    return (
        <div
            className={`relative w-full max-w-md mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            style={{ perspective: "1000px" }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-out"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Spotlight glow on hover */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                    style={{
                        opacity: isHovered ? 0.15 : 0,
                        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,107,53,0.6), transparent 60%)`,
                    }}
                />

                {/* Card background */}
                <div className="relative z-0 bg-gradient-to-br from-[#1a1a1a]/90 via-[#111]/95 to-[#0a0a0a]/90 backdrop-blur-xl border border-orange-500/15 rounded-3xl p-6 sm:p-8">
                    {/* Animated top border gradient */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-60" />

                    {/* Avatar section */}
                    <div className="flex flex-col items-center mb-6">
                        {/* Avatar ring */}
                        <div className="relative mb-4 group">
                            {/* Spinning border */}
                            <div
                                className="absolute -inset-1 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background:
                                        "conic-gradient(from 0deg, #ff6b35, #ff8c42, #d94f1f, #ff6b35)",
                                    animation: "spin 4s linear infinite",
                                }}
                            />
                            {/* Avatar circle with logo */}
                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl shadow-orange-500/20">
                                <img src="/Logo.png" alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            {/* Status dot */}
                            <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 rounded-full border-[3px] border-[#111] shadow-lg shadow-emerald-500/40">
                                <div className="w-full h-full bg-emerald-400 rounded-full animate-ping opacity-75" />
                            </div>
                        </div>

                        {/* Name & title */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
                            {personalInfo.name}
                        </h3>
                        <p className="text-[#ff8c42] font-medium text-sm sm:text-base mb-2">
                            Full-Stack Developer
                        </p>
                        <div className="flex items-center gap-1.5 text-[#a0a0a0] text-xs sm:text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Kolkata, India</span>
                            <span className="mx-1.5 text-orange-500/30">•</span>
                            <span className="text-emerald-400 font-medium">Open to work</span>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="text-center py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-orange-500/20 hover:bg-orange-500/[0.03] transition-all duration-300"
                            >
                                <p className="text-xl sm:text-2xl font-bold text-white">
                                    {stat.value}
                                </p>
                                <p className="text-xs text-[#a0a0a0] mt-0.5">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tech highlights */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {["React", "Node.js", "MongoDB", "TypeScript", "NestJS"].map(
                            (tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 border border-orange-500/15 text-[#ff8c42] hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            )
                        )}
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-3">
                        {socialLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#a0a0a0] hover:text-[#ff6b35] hover:border-orange-500/30 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        ))}
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
