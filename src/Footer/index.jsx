import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#006847] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">PortuEase</h2>
            <p className="text-sm">&copy; 2024 PortuEase. All rights reserved.</p>
          </div>
          <div className="text-center md:text-right">
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300">Lessons</a>
              <a href="#" className="text-white hover:text-gray-300">Tutors</a>
              <a href="#" className="text-white hover:text-gray-300">Quizzes</a>
              <a href="#" className="text-white hover:text-gray-300">Blog</a>
              <a href="#" className="text-white hover:text-gray-300">Support</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
