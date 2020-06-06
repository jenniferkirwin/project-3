// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const db = require('../models');
const hr = '-------------------------------------------------'

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
let returnedSchoolId;
let returnedUserId;

const foundSchool = (school) => {
  return db.School
  .findOne({
    where: {
      schoolName: school,
    },
    attributes: ['schoolId'],
    raw: true
  })
  .then((foundSchoolObj) => {
    returnedSchoolId = foundSchoolObj.schoolId;
    return foundSchoolObj.schoolId;
  })
  .catch((err) => {
    console.error(err);
  })
}

const foundUser = (user) => {
  return db.User
  .findOne({
    where: {
      email: user,
    },
    attributes: ['userId'],
    raw: true
  })
  .then((foundUserObj) => {
    returnedUserId = foundUserObj.userId;
    return foundUserObj.userId;
  })
  .catch((err) => {
    console.error(err);
  })
}

const varReset = () => {
  returnedSchoolId = '';
  returnedUserId = '';
}


// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

module.exports = {
  findCourses: (req, res) => {
    db.Course
    .findAll({
      where: {
        UserUserId: req.params.id
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
  }
  // updateClass: (req, res) => {
  //   db.Class
  //   .create({
  //     courseName: req.body.courseName,
  //     SchoolSchoolId: req.body.lastName,
  //     UserUserId: req.body.email        
  //   }) 
  // }
};