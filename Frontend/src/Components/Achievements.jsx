// Achievements Section Component
import { Trophy, Star, Users, Award, TrendingUp, Target } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import AnimatedCounter from "../animations/AnimatedCounter";
import SpotlightCard from "../animations/SpotlightCard";
import resumeData from "../data/resumeData.json";

const Achievements = ({ darkMode }) => {
  const leadership = resumeData.leadership || [];

  // Stats to showcase
  const stats = [
    {
      icon: Trophy,
      number: 150,
      suffix: "+",
      label: "Event Participants",
      description: "Organized successful tech events",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      number: 10,
      suffix: "+",
      label: "Team Members Led",
      description: "Technical leadership experience",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Star,
      number: 90.6,
      suffix: "%",
      label: "Academic Excellence",
      description: "12th Board Examination",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      number: 10,
      suffix: "+",
      label: "Students Mentored",
      description: "In competitive hackathons",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Achievements <span className="text-orange-gradient">&</span> Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4 text-lg">
              Driving impact through leadership and excellence
            </p>
          </div>
        </FadeContent>

        {/* Stats Grid with Animated Counters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimatedContent
              key={index}
              distance={60}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              delay={0.2 + (index * 0.1)}
              threshold={0.2}
            >
              <SpotlightCard className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 text-center">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 group-hover:orange-glow-sm transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-8 h-8 text-[#ff6b35]" />
                </div>

                {/* Animated Counter with Large Typography */}
                <div className="mb-2">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <AnimatedCounter
                      end={stat.number}
                      duration={2000}
                      decimals={stat.suffix === '%' ? 1 : 0}
                    />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-gradient transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#a0a0a0]">
                  {stat.description}
                </p>

                {/* Bottom Glow */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-500/0 to-orange-500/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        {/* Leadership Highlights */}
        {leadership.length > 0 && (
          <AnimatedContent
            distance={60}
            direction="vertical"
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={0.6}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Leadership <span className="text-orange-gradient">Highlights</span>
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {leadership.map((item, index) => (
                  <AnimatedContent
                    key={item.id}
                    distance={40}
                    direction="horizontal"
                    reverse={index % 2 !== 0}
                    duration={1}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    delay={0.7 + (index * 0.15)}
                  >
                    <SpotlightCard className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-orange-glow transition-all duration-300">
                      {/* Side Accent */}
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff6b35] to-[#d94f1f]"></div>

                      <div className="pl-4">
                        {/* Title with Icon */}
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 bg-orange-500/20 rounded-lg flex-shrink-0">
                            <Award className="w-5 h-5 text-[#ff6b35]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-white group-hover:text-orange-gradient transition-colors">
                              {item.title}
                            </h4>
                            {item.organization && (
                              <p className="text-sm text-[#a0a0a0] mt-1">{item.organization}</p>
                            )}
                            {item.achievement && (
                              <p className="text-sm text-[#e0e0e0] mt-2">{item.achievement}</p>
                            )}
                          </div>
                        </div>

                        {/* Achievements List */}
                        {item.achievements && item.achievements.length > 0 && (
                          <ul className="space-y-2 mt-3">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[#e0e0e0]">
                                <Star className="w-4 h-4 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </SpotlightCard>
                  </AnimatedContent>
                ))}
              </div>
            </div>
          </AnimatedContent>
        )}

        {/* Bottom Motivational Banner */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          delay={0.9}
        >
          <div className="mt-16">
            <SpotlightCard className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden border-orange-glow text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] via-yellow-500 to-[#ff6b35]"></div>

              <div className="relative z-10">
                <div className="flex justify-center gap-4 mb-4">
                  <Trophy className="w-12 h-12 text-[#ff6b35] animate-bounce" style={{ animationDuration: '2s' }} />
                  <Star className="w-12 h-12 text-yellow-500 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.2s' }} />
                  <TrendingUp className="w-12 h-12 text-[#ff6b35] animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Driving <span className="text-orange-gradient">Excellence</span> Through Action
                </h3>
                <p className="text-[#a0a0a0] max-w-2xl mx-auto">
                  Committed to continuous growth, impactful leadership, and delivering exceptional results
                </p>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Achievements;