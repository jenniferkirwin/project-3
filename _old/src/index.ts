// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import express from 'express';
const PORT = process.env.PORT || 3500;

const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Getting sequelize for database
const db = require('./models');

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Add Routes Here

// Connects to database then starts the server
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
