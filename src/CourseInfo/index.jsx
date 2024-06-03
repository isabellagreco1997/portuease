import React from 'react';

const CourseInfo = ({ course, pdfLink }) => {
  return (
    <div className="p-20 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 pr-4">
            <h3 className='pb-4'>Lesson</h3>
            <h2 className="text-4xl font-bold mb-4 text-[#002776]">{course.title}</h2>
            <p className="text-lg mb-6">{course.description}</p>
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#002776] text-white px-6 py-3 rounded-full hover:bg-[#001f5c] transition duration-300 mb-8">Start</button>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="font-semibold mr-2">Skill level:</span>
                <span>{course.level}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Time to complete:</span>
                <span>{course.time}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Certificate of completion:</span>
                <span>{course.certificate ? 'Included with paid plans' : 'None'}</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Prerequisites:</span>
                <span>None</span>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-2xl font-bold mb-4 text-[#002776]">About this course</h3>
              <p className="mb-6">{course.about}</p>
              <h3 className="text-2xl font-bold mb-4 text-[#002776]">Skills you'll gain</h3>
              <ul className="list-disc list-inside">
                {course.skills.map((skill, index) => (
                  <li key={index} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="md:w-1/2 pl-4 flex justify-center items-center">
            <img src={course.image} alt={course.title} className="rounded-lg shadow-md h-48 sm:h-56" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
