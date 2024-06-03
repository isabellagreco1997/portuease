import React from 'react';
import Image from './image.png';
import Background from './background.png';

const Hero = () => {
  return (
    <div className="p-20 bg-gray-100" style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div
        className="bg-white text-black p-8 pb-16 rounded-lg mx-auto max-w-7xl shadow-lg relative"
        
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
            <div className="mb-4">
              <span className="text-[#002776] bg-[#FECB00] text-xs font-bold px-4 py-2 rounded-2xl">Oi, tudo bem? Vamos aprender português!</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              
Achieve expertise in Brazilian Portuguese with 
              <span className="text-[#002776] bg-[#FECB00] px-2 rounded-md ml-2">PortuEase</span>
            </h1>
            <p className="text-lg mb-6">
              Interactive lessons, quizzes, and progress tracking to accelerate
              your Brazilian Portuguese learning journey.
            </p>
            <a href="/lessons">
              <button className="bg-[#FECB00] text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
                Get Fluent
              </button>
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={Image} alt="Tutor" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;