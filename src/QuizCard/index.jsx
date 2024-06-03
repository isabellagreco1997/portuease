import React from 'react';
import { Link } from 'react-router-dom';

const QuizCard = ({ id, title, description, questions, image }) => {
  return (
    <Link to={`/quiz/${id}`} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-gray-500">Questions: {questions.length}</div>
      </div>
    </Link>
  );
};

export default QuizCard;
