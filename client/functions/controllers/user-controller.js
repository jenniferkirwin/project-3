// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const db = require('../models');
const hr = '-------------------------------------------------'

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
let returnedSchoolId;
let returnedRoleId;

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

const foundRole = (role) => {
  return db.Role
  .findOne({
    where: {
      roleName: role,
    },
    attributes: ['roleId'],
    raw: true
  })
  .then((foundRoleObj) => {
    returnedRoleId = foundRoleObj.roleId;
    return foundRoleObj.roleId;
  })
  .catch((err) => {
    console.error(err);
  })
}

const varReset = () => {
  returnedSchoolId = '';
  returnedRoleId = '';
}

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Defining methods for the booksController
module.exports = {
  createUser: (req, res) => {
    Promise.all([
      foundRole(req.body.role), 
      foundSchool(req.body.school)
    ])
    .then(() => {
      db.User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email        
      })           
      .then((newUser) => {
        console.log(`${hr}USER ROle:${returnedSchoolId}${hr}`)
        console.log(`${hr}SCHOOL ROLE:${returnedRoleId}${hr}`)
        db.SchoolRole
        .create({
          RoleRoleId: returnedRoleId,
          SchoolSchoolId: returnedSchoolId,
          UserUserId: newUser.userId
        })
        .then((newSchoolRole) => {
          varReset();
          res.sendStatus(200);
        })
        .catch((err) => {
          varReset();
          console.error(err);
          res.sendStatus(500);
        })
      })
      .catch((err) => {
        varReset();
        console.error(err);
        res.sendStatus(500);
      })
    })
    .catch((error) => {
      varReset();
      console.error(error);
      res.sendStatus(500);
    });
  },
  findSchool: function(req, res) {
    db.School
    .findAll()           
    .then((found) => {
      res.json(found);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
  }
};