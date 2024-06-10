import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

const Header = () => {
  return (
    <div className='bg-[#006847]'>
      <div className="bg-black text-white text-center py-2">
        Master Portuguese Effortlessly with PortuEase 🇧🇷 
      </div>
      <header className="bg-[#006847] max-w-7xl text-white p-4 flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-4">
          <Link to="/portuease/" className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-full">
              <img src={Logo} alt="Logo" className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-bold">PortuEase</h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/portuease/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/lessons" className="text-white hover:text-gray-300">Lessons</Link>
          <Link to="/tutors" className="text-white hover:text-gray-300">Tutors</Link>
          <Link to="/quizzes" className="text-white hover:text-gray-300">Quizzes</Link>
          <Link to="/blog" className="text-white hover:text-gray-300">Blog</Link>
          <Link to="/support" className="text-white hover:text-gray-300">Support</Link>
        </nav>
        <Link to="/lessons">
          <button className="bg-[#FECB00] text-black px-4 py-2 rounded-full hover:bg-yellow-500">Get Started</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
