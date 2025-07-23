// Footer Component
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h3 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
            John Doe
          </h3>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>&copy; 2025 John Doe. All rights reserved.</p>
          <p className="mt-1">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;