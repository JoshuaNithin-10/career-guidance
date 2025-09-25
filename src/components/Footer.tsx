import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Pinnacle Wave</span>
          </div>
          <p className="text-gray-400 text-center">
            © 2025 Pinnacle Wave. Empowering Students with Smart Choices.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;