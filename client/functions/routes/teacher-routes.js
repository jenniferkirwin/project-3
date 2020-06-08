// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const userController = require('../controllers/teacher-controller');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Create Courses
router
  .route('/courses')
  .post(userController.createCourse)

// Courses by TeacherID
router
  .route('/courses/:teacherId')
  .get(userController.findCourses)

// Create Student Enrollment
router
  .route('/enrollments/')
  .post(userController.enrollStudent)

// Find Students in Given Teacher's Classes
router
  .route('/enrollments/:teacherId')
  .get(userController.findStudents)

router
  .route('/assignments/')
  .post(userController.createAssignment)
  // .put(userController.updateAssignment)
  // .get(userController.findAssignments)

// router
//   .route('/assignments/:studentId')
//   .get(userController.findStudentAssignments)

// // NEED TO THINK ABOUT THIS ROUTE
// router
//   .route('/assignments/submitted/:studentId')
//   .put(userController.updateStudentAssignment)


module.exports = router;

// find students
// find assignments
// create assignments