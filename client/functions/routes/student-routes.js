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
  .get(studentController.findAssignments);

router
  .route('/:studentId')
  .post(studentController.createSubmit)

module.exports = router;