import React from 'react';
import { useParams } from 'react-router-dom';
import { useTutors } from '../TutorContext';

const TutorDetail = () => {
  const { id } = useParams();
  const { tutors } = useTutors();
  const tutor = tutors.find((t) => t.id === parseInt(id));

  if (!tutor) {
    return <div>Tutor not found</div>;
  }

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img src={tutor.image} alt={tutor.name} className="w-full h-80 object-cover rounded-t-lg mb-8" />
          <h1 className="text-4xl font-bold mb-4">{tutor.name}</h1>
          <div className="text-blue-600 font-semibold mb-4">{tutor.expertise}</div>
          <p className="text-gray-700 mb-4">{tutor.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
