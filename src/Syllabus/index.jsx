import React from 'react';

const Syllabus = ({ syllabus, pdfLink }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#002776]">Syllabus</h2>
      {syllabus.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-4">
          <h3 className="text-2xl font-semibold mb-2 text-[#002776]">{item.title}</h3>
          <p className="mb-4">{item.description}</p>
          <ul className="list-none">
            {item.modules.map((module, idx) => (
              <li key={idx} className="flex items-center mb-2">
                <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-4">
                  <img src={module.icon} alt={module.type} className="h-4 w-4" />
                </span>
                <span className="font-semibold text-[#002776] mr-2">{module.type}</span>
                <span>{module.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex justify-center mt-8">
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#002776] text-white px-6 py-3 rounded-full hover:bg-[#001f5c] transition duration-300">Start</button>
        </a>
      </div>
    </div>
  );
};

export default Syllabus;
