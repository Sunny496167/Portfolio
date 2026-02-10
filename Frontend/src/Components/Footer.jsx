// Footer Component
import { Github, Linkedin, Mail } from "lucide-react";
import resumeData from "../data/resumeData.json";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            {resumeData.personalInfo.name}
          </h3>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={resumeData.personalInfo.profiles.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
          >
            <Github size={20} />
          </a>
          <a
            href={resumeData.personalInfo.profiles.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${resumeData.personalInfo.email}`}
            className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
          >
            <Mail size={20} />
          </a>
        </div>

        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>&copy; 2026 {resumeData.personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;