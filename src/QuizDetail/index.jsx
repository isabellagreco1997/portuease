import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuizzes } from '../QuizContext';

const QuizDetail = () => {
  const { id } = useParams();
  const { quizzes } = useQuizzes();
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quiz.questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img src={quiz.image} alt={quiz.title} className="w-full h-80 object-cover rounded-t-lg mb-8" />
          <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
          <p className="text-gray-700 mb-4">{quiz.description}</p>
          {showScore ? (
            <div className="text-2xl font-bold">Your score is: {score} / {quiz.questions.length}</div>
          ) : (
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-4">{quiz.questions[currentQuestionIndex].question}</h2>
                <div className="space-y-2">
                  {quiz.questions[currentQuestionIndex].options.map((option, index) => (
                    <div key={index}>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="option"
                          value={option}
                          checked={selectedOption === option}
                          onChange={handleOptionChange}
                          className="form-radio"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={handleNextQuestion}
                className="bg-[#FECB00] text-black px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
