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
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.findUser)

module.exports = router;