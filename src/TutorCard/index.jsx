import React from 'react';
import { Link } from 'react-router-dom';

const TutorCard = ({ id, name, expertise, description, image }) => {
  return (
    <Link to={`/tutor/${id}`} className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <div className="text-blue-600 font-semibold mb-2">{expertise}</div>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
};

export default TutorCard;
