// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
import express from 'express';
const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.json());

// Getting sequelize for database
// const db = require("./models");

// Routes
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Connects to database then starts the server
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// db.sequelize.sync().then(function() {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
