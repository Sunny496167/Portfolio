// components/LoadingAnimation.js
import { useEffect } from 'react';

const LoadingAnimation = ({ isLoading, onComplete }) => {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
          <div 
            className="absolute top-4 left-4 w-24 h-24 border-4 border-purple-300 border-b-transparent rounded-full animate-spin" 
            style={{ animationDelay: '0.15s' }}
          ></div>
          <div 
            className="absolute top-8 left-8 w-16 h-16 border-4 border-pink-300 border-l-transparent rounded-full animate-spin" 
            style={{ animationDelay: '0.3s' }}
          ></div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white animate-pulse">Loading Portfolio...</h2>
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div 
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
              style={{ animationDelay: '0.1s' }}
            ></div>
            <div 
              className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" 
              style={{ animationDelay: '0.2s' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;