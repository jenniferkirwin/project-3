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
  .get(studentController.createSubmit);

router
  .route('/:courseId')
  .post(studentController.findAssignments)

module.exports = router;