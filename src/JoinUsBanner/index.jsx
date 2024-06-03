import React from 'react';

const JoinUsBanner = () => {
  return (
    <div className="bg-[#002776] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-around items-center">
          <div className="text-center sm:text-left mb-8 sm:mb-0">
            <h2 className="text-3xl font-bold">Join in on <span className="text-[#002776] bg-[#FECB00] px-2 rounded-md">something big</span></h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-16">
            <div className="text-center">
              <p className="text-3xl font-bold">50M</p>
              <p className="text-lg">Learners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">190+</p>
              <p className="text-lg">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">3.7B</p>
              <p className="text-lg">Code submits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsBanner;
