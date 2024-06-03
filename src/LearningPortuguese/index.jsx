import React, { useState } from 'react';
import Image from './image.png';

const LearningPortuguese = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [answers, setAnswers] = useState({
    topic: '',
    goal: '',
    experience: ''
  });

  const nextStep = (answer) => {
    if (step === 1) {
      setAnswers({ ...answers, topic: answer });
    } else if (step === 2) {
      setAnswers({ ...answers, goal: answer });
    } else if (step === 3) {
      setAnswers({ ...answers, experience: answer });
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        generateRecommendations();
        setStep(4); // Set to step 4 after loading
      }, 2000);
    }
  };

  const generateRecommendations = () => {
    let recs = [];

    // Add logic here to generate recommendations based on answers
    if (answers.topic === 'Basic Portuguese') {
      recs.push('Basic Portuguese for Beginners');
    }
    if (answers.goal === 'Fluency') {
      recs.push('Conversational Skills Course');
    }
    if (answers.experience === 'Advanced') {
      recs.push('Advanced Grammar and Writing');
    }

    // Fallback recommendations
    if (recs.length === 0) {
      recs.push(
        'Business Portuguese Mastery',
        'Pronunciation Perfection',
        'Explore Portuguese Culture',
        'Travel Portuguese Essentials'
      );
    }

    setRecommendations(recs);
  };

  return (
    <div className="p-20 bg-gray-100">
      <div className="bg-white text-black px-8 py-20 rounded-lg mx-auto max-w-7xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Find the <span className="text-[#002776] bg-[#FECB00] px-2 rounded-md">Best Course</span> for You
        </h2>
        <p className="text-lg text-center mb-8">
          Answer 3 quick questions to get personalized course recommendations.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-center items-center">
          <div className="flex-1 md:w-1/2 pr-8">
            <div className="flex flex-col items-center justify-between h-full space-y-8">
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-[#002776] text-white' : 'bg-gray-300 text-gray-500'}`}>
                {step > 1 ? '✓' : '1'}
              </div>
              <div className="bg-gray-300 w-1 flex-1"></div>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-[#002776] text-white' : 'bg-gray-300 text-gray-500'}`}>
                {step > 2 ? '✓' : '2'}
              </div>
              <div className="bg-gray-300 w-1 flex-1"></div>
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-[#002776] text-white' : 'bg-gray-300 text-gray-500'}`}>
                {step > 3 ? '✓' : '3'}
              </div>
            </div>
          </div>

          <div className="flex-1 md:w-1/2">
            {!loading && step === 1 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">What do you want to learn about?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => nextStep('Basic Portuguese')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Basic Portuguese</button>
                  <button onClick={() => nextStep('Conversational Skills')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Conversational Skills</button>
                  <button onClick={() => nextStep('Business Portuguese')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Business Portuguese</button>
                  <button onClick={() => nextStep('Grammar and Writing')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Grammar and Writing</button>
                  <button onClick={() => nextStep('Pronunciation')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Pronunciation</button>
                  <button onClick={() => nextStep('Portuguese Culture')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Portuguese Culture</button>
                  <button onClick={() => nextStep('Travel Portuguese')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Travel Portuguese</button>
                  <button onClick={() => nextStep('Not sure yet')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Not sure yet</button>
                </div>
              </div>
            )}

            {!loading && step === 2 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">What do you want to achieve?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => nextStep('Fluency')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Fluency</button>
                  <button onClick={() => nextStep('Pass an Exam')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Pass an Exam</button>
                  <button onClick={() => nextStep('Travel Comfortably')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Travel Comfortably</button>
                  <button onClick={() => nextStep('Communicate with Family')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Communicate with Family</button>
                  <button onClick={() => nextStep('Business Meetings')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Business Meetings</button>
                  <button onClick={() => nextStep('Academic Purposes')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Academic Purposes</button>
                  <button onClick={() => nextStep('Just for Fun')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Just for Fun</button>
                  <button onClick={() => nextStep('Not sure yet')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Not sure yet</button>
                </div>
              </div>
            )}

            {!loading && step === 3 && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">How much experience do you have?</h3>
                <div className="grid grid-cols-1 gap-4">
                  <button onClick={() => nextStep('Beginner')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Beginner</button>
                  <button onClick={() => nextStep('Intermediate')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Intermediate</button>
                  <button onClick={() => nextStep('Advanced')} className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Advanced</button>
                </div>
              </div>
            )}

            {loading && (
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Thank you!</h3>
                <p className="text-lg mb-8">We are picking recommendations based on your interests...</p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            )}

            {!loading && step === 4 && (
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Your Recommendations</h3>
                <p className="text-lg mb-8">Based on your responses, here are the best courses for you:</p>
                <ul className="list-disc list-inside">
                  {recommendations.map((course, index) => (
                    <li key={index} className="text-lg">{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <img src={Image} alt="Learning Portuguese" className="h-48 sm:h-56" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPortuguese;
