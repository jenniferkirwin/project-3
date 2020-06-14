// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const db = require("../models");
const { Op } = require("sequelize");
const hr = '-------------------------------------------------'

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const foundEnrollments = (studentId) => {
  return db.Enrollment
  .findAll({
    where: {
      UserUserId: studentId,
    },
    attributes: ['CourseCourseId'],
    raw: true
  })
  .then((foundEnrollments) => {

    const formattedCourses = foundEnrollments.map(item => {
      const container = {};

      container.courseId = item.CourseCourseId;

      return container;
    })

    return formattedCourses;
  })
  .catch((err) => {
    console.error(err);
  })
}

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

module.exports = {

    createSubmit: (req, res) => {
      db.Submitted
      .create({
        submittedContent: req.body.submittedContent,
        AssignmentAssignmentId: req.body.assignmentId,
        UserUserId: req.body.userId        
      })
      .then((newSubmit) => {
        res.status(200).json(newSubmit);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      })
    },
  
    findAssignments: (req, res) => {
      db.Course
      .findAll({
        where: {
          courseId: req.params.courseId
        },
        include: [{
          model: db.Assignment,
        }]
      })           
      .then((foundAssignments) => {
        res.status(200).json(foundAssignments);
      })
      .catch((error) => {
        console.error(error);
        res.sendStatus(500);
      })
    },

    findStudentCourses: (req, res) => {
      Promise.all([
        foundEnrollments(req.params.studentId),
      ])
      .then(([returnedCourses]) => {
        db.Course
        .findAll({
          where: {
            [Op.or]: returnedCourses
          },
          include: [
            {model: db.Assignment},
            {model: db.Announcement}
          ]
        })        
        .then((foundCourses) => {
          res.status(200).json(foundCourses);
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
    }
}