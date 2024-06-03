import React from 'react';
import QuizCard from '../QuizCard';
import { useQuizzes } from '../QuizContext';

const QuizList = () => {
  const { quizzes } = useQuizzes();

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 border-s-8 border-yellow-500 pl-6">Quizzes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {console.log(quizzes)}
          {quizzes && quizzes.map((quiz) => (
            <QuizCard key={quiz.id} {...quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
