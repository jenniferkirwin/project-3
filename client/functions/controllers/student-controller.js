const db = require("../models");

module.exports = {

    createSubmit: (req, res) => {
      db.Submitted
      .create({
        SubmittedSubmittedContent: req.body.submittedContent,
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
          UserUserId: req.params.studentId
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
    }
}