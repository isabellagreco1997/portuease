import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I sign up for a course?',
      answer: 'You can sign up for a course by visiting the course page and clicking the "Enroll" button.'
    },
    {
      question: 'Can I access the courses on my mobile device?',
      answer: 'Yes, our courses are mobile-friendly and can be accessed on any device.'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes, you will receive a certificate of completion after successfully completing a course.'
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
