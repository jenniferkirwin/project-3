// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const db = require('../models');
const { Op } = require("sequelize");
const hr = '-------------------------------------------------'

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// params = ['assignmentId', 'assignmentText', 'dueDate' ]

const foundAssignments = (courseId) => {
  return db.Assignment
  .findAll({
    where: {
      CourseCourseId: courseId,
    },
    attributes: ['assignmentId', 'assignmentText', 'dueDate' ],
    raw: true
  })
  .then((foundAssignments) => {

    const formattedAssignments = foundAssignments.map(item => {
      const container = {};

      container.AssignmentAssignmentId = item.assignmentId;

      return container;
    })

    return formattedAssignments;
  })
  .catch((err) => {
    console.error(err);
  })
}

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

  findAllCourses: (req, res) => {
    db.Course
    .findAll({
      where: {
        SchoolSchoolId: req.params.schoolId
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

  // Create Class Assignments
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
  },

  // Create Class Annoucements
  // -------------------------------------------------------------------------

  createAnnoucement: (req, res) => {
    db.Annoucement
    .create({
      announcementText: req.body.announcementText,
      CourseCourseId: req.body.courseId        
    })
    .then((newAnnoucement) => {
      res.status(200).json(newAnnoucement);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  },

  findAnnoucements: (req, res) => {
    db.Annoucement
    .findAll({
      where: {
        CourseCourseId: req.body.courseId
      }
    })           
    .then((foundAnnoucements) => {
      res.status(200).json(foundAnnoucements);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  },

  // Find Submitted Assignments
  // -------------------------------------------------------------------------
  findStudentAssignments: (req, res) => {
    Promise.all([
      foundAssignments(req.body.courseId),
    ])
    .then(([returnedAssignments]) => {
      db.Submitted
      .findAll({
        where: {
          UserUserId: req.body.studentId,
          [Op.or]: returnedAssignments
        }
      })        
      .then((foundSubmitteds) => {
        res.status(200).json(foundSubmitteds);
      })
      .catch((err) => {
        console.error(
          `${hr}
          ERROR:
          ${err}
          ${hr}`
        );
        res.sendStatus(500);
      })
    })
    .catch((error) => {
      console.error(
        `${hr}
        ERROR 2:
        ${error}
        ${hr}`
      );
      res.sendStatus(500);
    });
  },

  // Grade Assignments
  // -------------------------------------------------------------------------
  gradeAssignment: (req, res) => {
    db.Submitted
    .update({ grade: req.body.grade }, {
      where: {
        submittedId: req.body.submittedId
      }
    })           
    .then((updatedReccord) => {
      res.status(200).json(updatedReccord);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  }
};