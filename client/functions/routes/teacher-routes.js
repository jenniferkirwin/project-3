// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher-controller')

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

router
  .route('assignments/:id')
  .get(teacherController)
