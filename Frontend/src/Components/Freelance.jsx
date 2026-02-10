// Freelance Projects Section Component
import { Users, Rocket, Handshake, ExternalLink, Github, CheckCircle2, TrendingUp } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Freelance = ({ darkMode }) => {
    const freelanceProjects = resumeData.freelanceProjects || [];

    return (
        <section id="freelance" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <FadeContent duration={1000}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Freelance <span className="text-orange-gradient">&</span> Client Work
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
                        <p className="text-[#a0a0a0] mt-4 max-w-2xl mx-auto">
                            Real client projects delivered with reliability, quality, and clear communication
                        </p>
                    </div>
                </FadeContent>

                {/* Trust Banner with Developer Illustration */}
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    duration={1}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={0.2}
                >
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border-orange-glow">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Left - Developer Illustration */}
                                <div className="text-center md:text-left">
                                    <div className="inline-block relative mb-4">
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] flex items-center justify-center text-5xl font-bold text-white shadow-2xl orange-glow">
                                            👨‍💻
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-14 h-14 bg-orange-500/40 rounded-full flex items-center justify-center">
                                            <Rocket className="w-7 h-7 text-[#ff6b35] animate-bounce" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Delivering Excellence</h3>
                                    <p className="text-[#a0a0a0]">Building solutions that exceed expectations</p>
                                </div>

                                {/* Right - Trust Badges */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center glass-card p-4 rounded-xl hover:border-orange-glow transition-all">
                                        <div className="w-12 h-12 mx-auto bg-orange-500/20 rounded-xl flex items-center justify-center mb-2">
                                            <Handshake className="w-6 h-6 text-[#ff6b35]" />
                                        </div>
                                        <p className="text-sm font-semibold text-white">Reliable</p>
                                        <p className="text-xs text-[#a0a0a0] mt-1">100% Delivery</p>
                                    </div>
                                    <div className="text-center glass-card p-4 rounded-xl hover:border-orange-glow transition-all">
                                        <div className="w-12 h-12 mx-auto bg-orange-500/20 rounded-xl flex items-center justify-center mb-2">
                                            <Users className="w-6 h-6 text-[#ff6b35]" />
                                        </div>
                                        <p className="text-sm font-semibold text-white">Communicative</p>
                                        <p className="text-xs text-[#a0a0a0] mt-1">Clear Updates</p>
                                    </div>
                                    <div className="text-center glass-card p-4 rounded-xl hover:border-orange-glow transition-all">
                                        <div className="w-12 h-12 mx-auto bg-orange-500/20 rounded-xl flex items-center justify-center mb-2">
                                            <TrendingUp className="w-6 h-6 text-[#ff6b35]" />
                                        </div>
                                        <p className="text-sm font-semibold text-white">Quality</p>
                                        <p className="text-xs text-[#a0a0a0] mt-1">Premium Code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>

                {/* Freelance Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {freelanceProjects.map((project, index) => (
                        <AnimatedContent
                            key={project.id}
                            distance={60}
                            direction="horizontal"
                            reverse={index % 2 !== 0}
                            duration={1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            delay={0.4 + (index * 0.15)}
                            threshold={0.2}
                        >
                            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer h-full flex flex-col">
                                {/* Top Orange Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                                {/* Project Header */}
                                <div className="mb-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-orange-gradient transition-colors mb-2">
                                                {project.name}
                                            </h3>
                                            {project.client && (
                                                <div className="flex items-center gap-2 text-[#a0a0a0]">
                                                    <Users className="w-4 h-4 text-[#ff6b35]" />
                                                    <span className="text-sm font-medium">{project.client}</span>
                                                </div>
                                            )}
                                        </div>
                                        {/* Delivery Icon */}
                                        <div className="p-3 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-xl group-hover:orange-glow-sm transition-all duration-300">
                                            <Rocket className="w-6 h-6 text-[#ff6b35]" />
                                        </div>
                                    </div>
                                    <p className="text-[#e0e0e0] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-[#a0a0a0] mb-3">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/5 text-[#ff8c42] border border-orange-500/20 hover:border-orange-500/40 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Key Outcomes */}
                                {project.outcomes && project.outcomes.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-[#a0a0a0] mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#ff6b35]" />
                                            Key Outcomes:
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.outcomes.map((outcome, i) => (
                                                <li key={i} className="text-[#e0e0e0] flex items-start gap-3 group/item">
                                                    <span className="text-[#ff6b35] mt-1 group-hover/item:scale-125 transition-transform">✓</span>
                                                    <span className="flex-1 text-sm">{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Trust Indicator */}
                                <div className="flex items-center gap-4 mb-6 pt-4 border-t border-orange-500/20">
                                    <div className="flex items-center gap-2 text-[#a0a0a0] text-sm">
                                        <Handshake className="w-4 h-4 text-[#ff6b35]" />
                                        <span>Quality Delivered</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#a0a0a0] text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        <span>Satisfied Client</span>
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3 mt-auto">
                                    {project.repoUrl && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 text-[#ff6b35] border border-orange-500/30 hover:bg-orange-500/30 hover:border-orange-500/50 transition-all text-sm font-semibold"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white hover:from-[#ff8c42] hover:to-[#ff6b35] transition-all text-sm font-semibold orange-glow-hover"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>

                                {/* Bottom Corner Accent */}
                                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-orange-500/0 to-orange-500/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>

                {/* Bottom CTA */}
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    duration={1}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={0.8}
                >
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-4 glass-card rounded-2xl px-8 py-4 border-orange-glow">
                            <Handshake className="w-5 h-5 text-[#ff6b35]" />
                            <p className="text-[#e0e0e0] font-medium">Ready to collaborate on your next project</p>
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    );
};

export default Freelance;
