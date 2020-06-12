import React from 'react';

// 1) NEED FOR API CALL
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
import APIUtil from './util/api';
const API = new APIUtil;

// 2) PICK AND CHOOSE THE CALL YOU NEED DOWN HERE
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// STUDENTS / SEARCH PAGE - Get Courses
// ---------------------------------------------------
const foundCourses = () => API.getCourses(sessionStorage.getItem('School'))
  .then(({data}) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });

// STUDENTS / SEARCH PAGE - Enroll in Course. WON'T make a duplicate reccord
// ---------------------------------------------------
const enrollInCourse = (selectedCourse: string) => API.enrollStudent({
  courseId: selectedCourse,
  userId: sessionStorage.getItem('UID')
})
  .then(({data}) => {
    console.log({data})
  })
  .catch((error) => {
    console.log(error)
  });

// enrollInCourse('100848a2-b752-4e39-8a0c-76a7ec33ca90');

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

const Sample = () => {

    return (
      <div>

      </div>  
    );
}

export default Sample;