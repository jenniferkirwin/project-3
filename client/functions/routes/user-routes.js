// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

router
  .route('/')
  .post(userController.createUser)
  .get(userController.findSchool)

module.exports = router;