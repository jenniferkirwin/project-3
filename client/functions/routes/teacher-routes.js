// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher-controller');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Courses
// ---------------------------------------------------------------------------
// Create Courses
router
  .route('/courses')
  .post(teacherController.createCourse)

// Courses by TeacherID
router
  .route('/courses/:teacherId')
  .get(teacherController.findCourses)

// Courses by TeacherID
router
  .route('/courses/all/:schoolId')
  .get(teacherController.findAllCourses)

// Enrollments
// ---------------------------------------------------------------------------
// Create Student Enrollment
router
  .route('/enrollments/')
  .post(teacherController.enrollStudent)

// Find Students by Teacher, Separated by Class
router
  .route('/enrollments/:teacherId')
  .get(teacherController.findStudents)

// Assignments
// ---------------------------------------------------------------------------
// Create Assignments
router
  .route('/assignments/')
  .post(teacherController.createAssignment)
  .get(teacherController.findStudentAssignments)

// Grade Assignments
router
  .route('/assignments/grade')
  .put(teacherController.gradeAssignment)

// Find Assignments by Class
router
  .route('/assignments/courses/:teacherId')
  .get(teacherController.findClassAssignments)

// Annoucements
// ---------------------------------------------------------------------------
// Create Annoucements
router
  .route('/announcements/')
  .post(teacherController.createAnnouncement)

// Find Annoucements
router
  .route('/announcements/:courseId')
  .post(teacherController.findAnnouncements)

module.exports = router;