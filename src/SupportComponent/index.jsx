import React from 'react';
import FAQ from '../Faq';
import ContactForm from '../ContactForm';

const Support = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 border-s-8 border-yellow-500 pl-6">Support</h1>
        <FAQ />
        <ContactForm />
      </div>
    </div>
  );
};

export default Support;
