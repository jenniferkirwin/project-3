// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const db = require('../models');
const hr = '-------------------------------------------------'

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

module.exports = {

  // Create Courses Functions
  // -------------------------------------------------------------------------

  createCourse: (req, res) => {
    db.Course
    .create({
      courseName: req.body.courseName,
      SchoolSchoolId: req.body.schoolId,
      UserUserId: req.body.userId        
    })
    .then((newCourse) => {
      res.status(200).json(newCourse);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  },

  findCourses: (req, res) => {
    db.Course
    .findAll({
      where: {
        UserUserId: req.params.teacherId
      }
    })           
    .then((foundCourses) => {
      res.status(200).json(foundCourses);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  },

  // Enroll and Find Student Functions
  // -------------------------------------------------------------------------

  enrollStudent: (req, res) => {
    db.Enrollment
    .create({
      CourseCourseId: req.body.courseId,
      UserUserId: req.body.userId        
    })
    .then((newEnrollment) => {
      res.status(200).json(newEnrollment);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  },

  findStudents: (req, res) => {
    db.Course
    .findAll({
      where: {
        UserUserId: req.params.teacherId
      },
      include: [{
        model: db.Enrollment,
        include: [{
          model: db.User,
        }]
      }]
    })           
    .then((foundStudents) => {
      res.status(200).json(foundStudents);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  },

  // Enroll and Find Student Functions
  // NOT DONE YET... STILL WORKING ON
  // -------------------------------------------------------------------------

  createAssignment: (req, res) => {
    db.Assignment
    .create({
      assignmentText: req.body.assignmentText,
      dueDate: req.body.dueDate,
      CourseCourseId: req.body.courseId        
    })
    .then((newCourse) => {
      res.status(200).json(newCourse);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  }

};