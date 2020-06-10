// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student-controller')

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

router
  .route('/')
  .post(studentController.createSubmit);

router
  .route('/:courseId')
  .get(studentController.findAssignments)

module.exports = router;