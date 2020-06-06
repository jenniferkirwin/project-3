// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const db = require('../models');
const hr = '-------------------------------------------------'

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

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
    return foundRoleObj.roleId;
  })
  .catch((err) => {
    console.error(err);
  })
}

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

module.exports = {
  createUser: (req, res) => {
    Promise.all([
      foundRole(req.body.role), 
      foundSchool(req.body.school)
    ])
    .then(([returnedRoleId, returnedSchoolId]) => {
      db.User
      .create({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email        
      })           
      .then((newUser) => {
        console.log(`${hr}USER ROLE:${returnedSchoolId}${hr}`)
        console.log(`${hr}SCHOOL ROLE:${returnedRoleId}${hr}`)
        db.SchoolRole
        .create({
          RoleRoleId: returnedRoleId,
          SchoolSchoolId: returnedSchoolId,
          UserUserId: newUser.userId
        })
        .then((newSchoolRole) => {
          res.status(200).json(newSchoolRole);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        })
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
  },
  findUser: (req, res) => {
    console.log(`${hr}SCHOOL ROLE:${req.params.id}${hr}`)
    db.SchoolRole
      .findOne({
        where: {
          UserUserId: req.params.id,
        },
        // attributes: ['schoolId'],
        raw: true
      })
      .then((foundUserRoleObj) => {
        res.status(200).json(foundUserRoleObj);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
    }
};