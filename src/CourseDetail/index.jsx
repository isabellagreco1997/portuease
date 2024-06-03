import React from 'react';
import { useParams } from 'react-router-dom';
import { useCourses } from '../CourseContext';
import CourseInfo from '../CourseInfo';
import Syllabus from '../Syllabus';

const CourseDetail = () => {
  const { id } = useParams();
  const { courses } = useCourses();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <>
      <CourseInfo course={course} pdfLink={course.pdfLink}/>
      <Syllabus syllabus={course.syllabus} pdfLink={course.pdfLink} />
    </>
  );
};

export default CourseDetail;
