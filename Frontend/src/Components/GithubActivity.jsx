// GitHub Activity Section Component
import { useState } from "react";
import { Github } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import AnimatedContent from "../animations/AnimatedContent";
import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = ({ darkMode }) => {
  const [selectedYear, setSelectedYear] = useState("last");

  return (
    <section
      id="github"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#1a0f0a] to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl float-animation"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <FadeContent duration={1000}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#ff6b35] rounded-full"></div>
              <Github className="w-8 h-8 text-[#ff6b35]" />
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#ff6b35] rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              GitHub <span className="text-orange-gradient">Activity</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] mx-auto rounded-full"></div>
            <p className="text-[#a0a0a0] mt-4 max-w-2xl mx-auto">
              Real-time development metrics, streak tracking, and codebase activity
            </p>
          </div>
        </FadeContent>

        {/* Contributions Calendar Card */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          delay={0.2}
        >
          <div className="glass-card rounded-3xl p-6 sm:p-8 border-orange-glow flex flex-col items-center justify-center relative overflow-hidden group mb-8">
            {/* Top Orange Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] opacity-60"></div>

            {/* Year Selector Tabs */}
            <div className="flex flex-wrap gap-2.5 justify-center mb-6 relative z-10">
              {["last", 2026, 2025, 2024, 2023].map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ${
                    selectedYear === year
                      ? "bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] border-transparent text-white shadow-lg shadow-orange-500/20"
                      : "bg-white/5 border-white/10 text-[#a0a0a0] hover:text-white hover:bg-white/10"
                  }`}
                >
                  {year === "last" ? "Last 365 Days" : year}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto w-full flex justify-center py-4 scrollbar-thin scrollbar-thumb-orange-500/20 scrollbar-track-transparent">
              <GitHubCalendar
                username="Sunny496167"
                year={selectedYear === "last" ? undefined : selectedYear}
                blockSize={13}
                blockMargin={4}
                fontSize={12}
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#ffd3c2", "#ff8c5a", "#ff6b35", "#d94f1f"],
                }}
              />
            </div>
            <p className="text-xs text-[#a0a0a0] mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Real-time contribution calendar fetched directly from GitHub profile
            </p>
          </div>
        </AnimatedContent>

        {/* GitHub Stats Cards Grid */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          delay={0.4}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Profile Stats Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-orange-glow flex items-center justify-center relative overflow-hidden group min-h-[220px]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] opacity-60"></div>
              <img
                src="https://github-readme-stats-git-master-anuraghazra.vercel.app/api?username=Sunny496167&show_icons=true&theme=transparent&title_color=ff6b35&text_color=e0e0e0&icon_color=ff8c5a&hide_border=true&include_all_commits=true"
                alt="Sunny's GitHub Stats"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Streak Stats Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-orange-glow flex items-center justify-center relative overflow-hidden group min-h-[220px]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] opacity-60"></div>
              <img
                src="https://streak-stats.demolab.com/?user=Sunny496167&theme=transparent&ring=ff6b35&fire=ff8c5a&currStreakNum=ff6b35&currStreakLabel=ff6b35&sideNums=e0e0e0&sideLabels=a0a0a0&dates=888888&hide_border=true"
                alt="Sunny's GitHub Streak"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Top Languages Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border-orange-glow flex items-center justify-center relative overflow-hidden group min-h-[220px]">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] opacity-60"></div>
              <img
                src="https://github-readme-stats-git-master-anuraghazra.vercel.app/api/top-langs/?username=Sunny496167&theme=transparent&title_color=ff6b35&text_color=e0e0e0&hide_border=true&layout=compact"
                alt="Sunny's Top Languages"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default GithubActivity;
