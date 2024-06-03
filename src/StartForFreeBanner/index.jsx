import React from 'react';
import Image1 from './image1.png'
import Image2 from './image2.png'

const StartForFreeBanner = () => {
  return (
    <div className="bg-[#006847] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center">
        <div className="flex flex-col sm:flex-row items-center sm:w-1/2">
          <div className="  h-48 w-48 sm:h-56 sm:w-56 mb-8 sm:mb-0 sm:mr-8">
            <img src={Image1} alt="Person 1" className=" h-full object-fit" />
          </div>
          <div className="h-48 w-48 sm:h-56 sm:w-56">
            <img src={Image2} alt="Person 2" className="h-full object-fit" />
          </div>
        </div>
        <div className="sm:w-1/2 text-center sm:text-left mt-8 sm:mt-0">
          <h2 className="text-4xl font-bold mb-4">Start for free</h2>
          <p className="text-lg mb-8">If you've made it this far, you must be at least a little curious. Sign up and take the first step toward your goals.</p>
          <button className="bg-[#FECB00] text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default StartForFreeBanner;
