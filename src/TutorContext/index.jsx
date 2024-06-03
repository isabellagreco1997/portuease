import React, { createContext, useContext, useState } from 'react';

const TutorContext = createContext();

export const useTutors = () => {
  return useContext(TutorContext);
};

const TutorProvider = ({ children }) => {
  const [tutors] = useState([
    {
      id: 1,
      name: 'Maria Silva',
      expertise: 'Conversational Skills',
      description: 'Maria has over 10 years of experience in teaching Portuguese.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'João Pereira',
      expertise: 'Business Portuguese',
      description: 'João specializes in teaching Portuguese for business professionals.',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: 3,
      name: 'Ana Souza',
      expertise: 'Grammar and Writing',
      description: 'Ana is an expert in Portuguese grammar and writing.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ]);

  return (
    <TutorContext.Provider value={{ tutors }}>
      {children}
    </TutorContext.Provider>
  );
};

export default TutorProvider;
