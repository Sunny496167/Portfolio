// Enhanced Certifications Section Component
import { useState } from "react";
import { X } from "lucide-react";
import FadeContent from "../animations/FadeContent";
import ScrollReveal from "../animations/ScrollReveal";
import AnimatedContent from "../animations/AnimatedContent";
import Magnet from "../animations/Magnet";
import SpotlightCard from "../animations/SpotlightCard";
import resumeData from "../data/resumeData.json";

const Certifications = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = resumeData.certifications.map(cert => ({
    title: cert.name,
    issuer: cert.issuer,
    date: "2024", // Can be added to resumeData later
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    description: cert.description
  }));

  console.log('Certifications Data:', resumeData.certifications);
  console.log('Mapped Certifications:', certifications);
  console.log('Certifications Length:', certifications.length);

  return (
    <section id="certifications" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={1}>
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </FadeContent>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <AnimatedContent
              key={index}
              distance={80}
              direction="vertical"
              duration={0.8}
              ease="back.out(1.4)"
              initialOpacity={0.5}
              animateOpacity
              scale={0.95}
              delay={0.1 + (index * 0.1)}
              threshold={0.01}
            >
              <Magnet padding={25} magnetStrength={20}>
                <SpotlightCard
                  className="h-full"
                  spotlightColor={darkMode ? "rgba(147, 51, 234, 0.1)" : "rgba(147, 51, 234, 0.08)"}
                >
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group h-full`}
                  >
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-4">
                      <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-600 transition-all duration-300`}>
                        {cert.title}
                      </h3>
                      <p className={`text-sm mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'} group-hover:text-purple-400 transition-colors duration-300`}>
                        {cert.issuer}
                      </p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-gray-600 transition-colors duration-300`}>
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Magnet>
            </AnimatedContent>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
            <AnimatedContent
              distance={100}
              direction="vertical"
              duration={0.6}
              ease="back.out(1.4)"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
            >
              <div
                className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-xl"></div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedCert.title}
                  </h3>
                  <p className={`text-lg mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    {selectedCert.issuer}
                  </p>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Issued: {selectedCert.date}
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {selectedCert.description}
                  </p>
                </div>
              </div>
            </AnimatedContent>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;