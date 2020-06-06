// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const userController = require('../controllers/teacher-controller');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

router
  .route('/courses')
  .post(userController.createCourse)

router
  .route('/courses/:id')
  .get(userController.findCourses)

module.exports = router;