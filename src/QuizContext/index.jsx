import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const useQuizzes = () => {
  return useContext(QuizContext);
};

const QuizProvider = ({ children }) => {
  const [quizzes] = useState([
    {
      id: 1,
      title: 'Basic Portuguese Vocabulary',
      description: 'Test your knowledge of basic Portuguese vocabulary.',
      questions: [
        { question: 'What is the Portuguese word for "apple"?', options: ['Maçã', 'Banana', 'Laranja', 'Uva'], answer: 'Maçã' },
        { question: 'How do you say "good morning" in Portuguese?', options: ['Boa tarde', 'Boa noite', 'Bom dia', 'Olá'], answer: 'Bom dia' },
        { question: 'What is the color "red" in Portuguese?', options: ['Verde', 'Vermelho', 'Azul', 'Amarelo'], answer: 'Vermelho' }
      ],
      image: 'https://amigoenergy.com/wp-content/uploads/2023/02/Carnival-in-Latin-America-Image-of-People-Celebrating-scaled.jpeg'
    },
    {
      id: 2,
      title: 'Intermediate Portuguese Grammar',
      description: 'Challenge yourself with intermediate Portuguese grammar questions.',
      questions: [
        { question: 'Which is the correct form of the verb "to be" in the sentence "I am happy"?', options: ['Estou', 'Estás', 'Está', 'Estamos'], answer: 'Estou' },
        { question: 'What is the plural form of "carro" (car)?', options: ['Carros', 'Carras', 'Carres', 'Carrus'], answer: 'Carros' },
        { question: 'Choose the correct translation for "She has a book."', options: ['Ela tem um livro.', 'Ele tem um livro.', 'Ela têm um livro.', 'Ele têm um livro.'], answer: 'Ela tem um livro.' }
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Desfile_Portela_2014_%28906185%29.jpg/800px-Desfile_Portela_2014_%28906185%29.jpg'
    },
    {
      id: 3,
      title: 'Advanced Portuguese Listening',
      description: 'Improve your listening skills with advanced Portuguese quizzes.',
      questions: [
        { question: 'What is the Portuguese word for "butterfly"?', options: ['Borboleta', 'Cachorro', 'Gato', 'Pássaro'], answer: 'Borboleta' },
        { question: 'How do you say "excuse me" in Portuguese?', options: ['Obrigado', 'Desculpa', 'Por favor', 'Com licença'], answer: 'Com licença' },
        { question: 'What is the color "yellow" in Portuguese?', options: ['Verde', 'Vermelho', 'Azul', 'Amarelo'], answer: 'Amarelo' }
      ],
      image: 'https://riotheguide.com/wp-content/uploads/2020/02/5c6333a2-e2cf-4236-b219-a7a8c2f4da31.jpeg?w=800'
    }
  ]);

  return (
    <QuizContext.Provider value={{ quizzes }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
