import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCourses } from '../CourseContext';

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (category, value) => {
    setFilters({
      ...filters,
      [category]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      level: '',
      price: '',
      type: '',
      time: '',
    });
  };

  return (
    <div className="w-full sm:w-1/4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button onClick={clearFilters} className="text-blue-500 underline">Clear filters</button>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Level</h3>
        <div>
          <label className="flex items-center mb-2">
            <input type="radio" name="level" value="Beginner" onChange={() => handleFilterChange('level', 'Beginner')} />
            <span className="ml-2">Beginner</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="level" value="Intermediate" onChange={() => handleFilterChange('level', 'Intermediate')} />
            <span className="ml-2">Intermediate</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="level" value="Advanced" onChange={() => handleFilterChange('level', 'Advanced')} />
            <span className="ml-2">Advanced</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Price</h3>
        <div>
          <label className="flex items-center mb-2">
            <input type="radio" name="price" value="Free" onChange={() => handleFilterChange('price', 'Free')} />
            <span className="ml-2">Free</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="price" value="Paid" onChange={() => handleFilterChange('price', 'Paid')} />
            <span className="ml-2">Paid</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Type</h3>
        <div>
          <label className="flex items-center mb-2">
            <input type="radio" name="type" value="Career path" onChange={() => handleFilterChange('type', 'Career path')} />
            <span className="ml-2">Career path</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="type" value="Skill path" onChange={() => handleFilterChange('type', 'Skill path')} />
            <span className="ml-2">Skill path</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="type" value="Course" onChange={() => handleFilterChange('type', 'Course')} />
            <span className="ml-2">Course</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Average time to complete</h3>
        <div>
          <label className="flex items-center mb-2">
            <input type="radio" name="time" value="Less than 5 hours" onChange={() => handleFilterChange('time', 'Less than 5 hours')} />
            <span className="ml-2">Less than 5 hours</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="time" value="5-10 hours" onChange={() => handleFilterChange('time', '5-10 hours')} />
            <span className="ml-2">5-10 hours</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="radio" name="time" value="10-20 hours" onChange={() => handleFilterChange('time', '10-20 hours')} />
            <span className="ml-2">10-20 hours</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => (
  <Link to={`/course/${course.id}`}>
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 transition bg-white">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm">{course.level}</span>
          <span className="text-sm">{course.time}</span>
        </div>
        {course.certificate && (
          <div className="mt-2 text-sm text-green-600">With Certificate</div>
        )}
      </div>
    </div>
  </Link>
);


const CourseList = () => {
  const { courses } = useCourses();
  const [filters, setFilters] = useState({
    level: '',
    price: '',
    type: '',
    time: '',
  });

  const filteredCourses = courses.filter((course) => {
    return (
      (filters.level ? course.level === filters.level : true) &&
      (filters.price ? course.price === filters.price : true) &&
      (filters.type ? course.type === filters.type : true) &&
      (filters.time ? course.time === filters.time : true)
    );
  });

  return (
    <div className="p-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-16 border-s-8 border-yellow-500 pl-6">Explore Portuguese Courses</h2>
      <div className="flex">
        <Filters filters={filters} setFilters={setFilters} />
        <div className="w-full sm:w-3/4 p-4 ">
          <h2 className="text-2xl font-bold mb-4 ">Portuguese Courses ({filteredCourses.length} results)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
