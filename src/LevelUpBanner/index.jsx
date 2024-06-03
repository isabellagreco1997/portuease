import React from 'react';
import Image from './image.png'

const LevelUpBanner = () => {
  return (
    <div className="bg-[#002776] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/2">
          <div className="mb-4">
            PortuEase
          </div>
          <h2 className="text-4xl font-bold mb-4">Level up your team's skills</h2>
          <p className="text-lg mb-8">Give your team the knowledge, experience, and confidence they need to tackle any problem.</p>
          <button className="bg-[#FECB00] text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">Explore business plans</button>
        </div>
        <div className="h-auto  sm:w-1/2 flex justify-center mt-8 sm:mt-0">
          <img src={Image} alt="Hexagon Graphic" className=" h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LevelUpBanner;
