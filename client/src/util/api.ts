import axios from 'axios';

axios.defaults.baseURL = 'https://us-central1-user-management-system-2020.cloudfunctions.net/app/';

// Interface Values
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

interface StudentEnrollment {
  courseId: string | null;
  userId: string | null;
}

interface StudentAssignment {
  courseId: string | null;
  studentId: string | null;
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

  getStudentCourses = (studentId:string | null) => {
    return axios.get(`student/courses/${studentId}`);
  }

  // Teacher Calls
  // ------------------------------------------------------------------------------

  getTeacherAssignments = (teacherId:string | null) => {
    return axios.get(`teacher/assignments/courses/${teacherId}`);
  }

  getTeacherStudents = (teacherId:string | null) => {
    return axios.get(`teacher/enrollments/${teacherId}`);
  }

  getStudentAssignments = (student:StudentAssignment) => {
    return axios.get(`teacher/enrollments/`, {
      params: {
        studentId: student.studentId,
        courseId: student.courseId
      }
    });
  }

}