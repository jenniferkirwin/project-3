// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const userController = require('../controllers/teacher-controller');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Courses
// ---------------------------------------------------------------------------
// Create Courses
router
  .route('/courses')
  .post(userController.createCourse)

// Courses by TeacherID
router
  .route('/courses/:teacherId')
  .get(userController.findCourses)

// Courses by TeacherID
router
  .route('/courses/all/:schoolId')
  .get(userController.findAllCourses)

// Enrollments
// ---------------------------------------------------------------------------
// Create Student Enrollment
router
  .route('/enrollments/')
  .post(userController.enrollStudent)

// Find Students by Teacher, Separated by Class
router
  .route('/enrollments/:teacherId')
  .get(userController.findStudents)

// Assignments
// ---------------------------------------------------------------------------
// Create Assignments
router
  .route('/assignments/')
  .post(userController.createAssignment)
  .get(userController.findStudentAssignments)

// Grade Assignments
router
  .route('/assignments/grade')
  .put(userController.gradeAssignment)

// Annoucements
// ---------------------------------------------------------------------------
// Create Annoucements
router
  .route('/annoucements/')
  .post(userController.createAnnoucement)

// Find Annoucements
router
  .route('/annoucements/:courseId')
  .post(userController.findAnnoucements)

module.exports = router;