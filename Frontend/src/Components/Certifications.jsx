// Certifications Section Component
import { Award, BadgeCheck, ShieldCheck, ExternalLink } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const Certifications = ({ darkMode }) => {
  const certifications = resumeData.certifications || [];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Certifications <span className="text-orange-gradient">&</span> Credentials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4">
              Recognized skills and validated expertise
            </p>
          </div>
        </FadeContent>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedContent
              key={cert.id}
              distance={40}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.2 + (index * 0.15)}
              threshold={0.2}
            >
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                {/* Subtle Top Accent */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-start gap-4">
                  {/* Certificate Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 flex items-center justify-center group-hover:orange-glow-sm transition-all duration-300 group-hover:scale-110">
                      <Award className="w-8 h-8 text-[#ff6b35]" />
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-gradient transition-colors mb-2">
                      {cert.name}
                    </h3>

                    {/* Platform/Issuer with Badge Icon */}
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                      <span className="text-[#e0e0e0] font-medium text-sm">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-[#a0a0a0] text-sm mb-3 leading-relaxed">
                        {cert.description}
                      </p>
                    )}

                    {/* Year/Date and Verification */}
                    <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-orange-500/10">
                      {/* Year */}
                      {cert.year && (
                        <span className="text-xs text-[#a0a0a0] font-medium">
                          {cert.year}
                        </span>
                      )}

                      {/* Verification Check */}
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-500 font-semibold">Verified</span>
                      </div>
                    </div>

                    {/* View Certificate Link (if available) */}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-[#ff6b35] hover:text-[#ff8c42] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Subtle Corner Glow */}
                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-orange-500/0 to-orange-500/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          delay={0.6}
        >
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 glass-card rounded-full px-6 py-3">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="text-[#e0e0e0] font-medium">All Credentials Verified</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Certifications;