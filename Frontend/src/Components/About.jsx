// About Section Component
import { Code, Lightbulb, Layers, Target } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import resumeData from "../data/resumeData.json";

const About = ({ darkMode }) => {
  const features = [
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Breaking down complex challenges into elegant, efficient solutions"
    },
    {
      icon: Layers,
      title: "Scalable Systems",
      description: "Building robust architectures that grow with your business needs"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, readable code following best practices"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="text-orange-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Developer Avatar Illustration */}
          <AnimatedContent
            distance={60}
            direction="horizontal"
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={0.2}
          >
            <div className="relative">
              {/* Main Avatar Card */}
              <div className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                {/* Orange accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f]"></div>

                {/* Developer Illustration */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* Avatar with thinking pose */}
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#ff8c42] to-[#ff6b35] flex items-center justify-center text-6xl font-bold text-white shadow-2xl orange-glow">
                      {resumeData.personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Thinking bubbles */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/30 rounded-full animate-pulse"></div>
                    <div className="absolute -top-8 -right-2 w-4 h-4 bg-orange-500/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  {/* Laptop/Coding illustration */}
                  <div className="relative">
                    <div className="w-64 h-40 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-xl border-2 border-orange-500/30 shadow-2xl">
                      {/* Screen with code */}
                      <div className="w-full h-28 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-t-lg p-4">
                        <div className="w-full h-full bg-black/60 rounded-sm p-2 font-mono text-xs">
                          <div className="text-orange-400">&lt;Developer /&gt;</div>
                          <div className="text-green-400 ml-2">passion: true</div>
                          <div className="text-blue-400 ml-2">skills: ++</div>
                          <div className="flex gap-1 mt-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                      {/* Keyboard */}
                      <div className="px-4 py-2">
                        <div className="grid grid-cols-12 gap-1">
                          {[...Array(24)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-gray-700 rounded-sm"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-orange-500 font-semibold text-lg">Coding with Passion</p>
                    <p className="text-[#a0a0a0] text-sm">Building the future, one line at a time</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>

          {/* Right Side - Professional Story */}
          <AnimatedContent
            distance={60}
            direction="horizontal"
            reverse
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            delay={0.4}
          >
            <div className="space-y-6">
              {/* Main Story Card */}
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden border-orange-glow">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6b35] to-[#d94f1f]"></div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-[#e0e0e0] leading-relaxed">
                    {resumeData.summary}
                  </p>
                </div>
              </div>

              {/* Passion Statement */}
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Target className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">What Drives Me</h4>
                    <p className="text-[#e0e0e0]">
                      Passionate about transforming complex problems into simple, elegant solutions that make a real-world impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Career Focus */}
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-xl">
                    <Code className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Career Focus</h4>
                    <p className="text-[#e0e0e0]">
                      Specializing in full-stack development with modern frameworks, creating scalable applications that deliver exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Feature Icons Section */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          delay={0.6}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-orange-glow transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Orange accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl flex items-center justify-center group-hover:orange-glow-sm transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-[#ff6b35]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-gradient transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a0a0a0] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default About;