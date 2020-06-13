import React from 'react';

// 1) NEED FOR API CALL
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
import APIUtil from './util/api';
const API = new APIUtil;

// 2) PICK AND CHOOSE THE CALL YOU NEED DOWN HERE
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// STUDENTS / SEARCH PAGE - GET - Get Courses
// ---------------------------------------------------
const foundCourses = () => API.getCourses(sessionStorage.getItem('School'))
  .then(({data}) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  });

// STUDENTS / SEARCH PAGE - POST - Enroll in Course. WON'T make a duplicate reccord
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

// STUDENTS / HOME PAGE - GET - Finds all classes student enrolled in with nested assignments for each class
// ---------------------------------------------------
const findStudentCourses = () => API.getStudentCourses(sessionStorage.getItem('UID'))
.then(({data}) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
});

// TEACHER / ASSIGNMENTS PAGE - GET - Finds all classes with nested assignments, based on TeacherId
// ---------------------------------------------------
const findTeacherCourses = () => API.getTeacherAssignments(sessionStorage.getItem('UID'))
.then(({data}) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
});

// TEACHER / GRADE PAGE - GET - Finds all classes with nested student enrollments, then nested student info based on TeacherId
// I CAN GIVE THIS IN A DIFFERENT FORMAT IF YOU WANT
// ---------------------------------------------------
const findTeacherStudents = () => API.getTeacherStudents(sessionStorage.getItem('UID'))
.then(({data}) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
});

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

const Sample = () => {

    return (
      <div>
        
      </div>  
    );
}

export default Sample;