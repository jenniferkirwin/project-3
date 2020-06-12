import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-user-management-system-2020.cloudfunctions.net/app/';

// Interface Values
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

interface StudentEnrollment {
  courseId: string | null;
  userId: string | null;
}

// API Calls
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

export default class Api {
  
  constructor() {}

  // Student Calls
  // ------------------------------------------------------------------------------

  getAssignments = () => {
    return axios.get('/api/assignments');
  }

  submitAssignment = (submittedAssignment: object) => {
    return axios.post('/api/assignments/submit', submittedAssignment)
  }

  getCourses = (foundSchoolId:string | null) => {
    return axios.get(`teacher/courses/all/${foundSchoolId}`);
  }

  enrollStudent = (student:StudentEnrollment) => {
    return axios.post('/teacher/enrollments/', {
      courseId: student.courseId,
      userId: student.userId
    })
  }

  // Teacher Calls
  // ------------------------------------------------------------------------------


}