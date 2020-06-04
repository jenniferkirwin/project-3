// Dependencies
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Firebase Application
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Express
const express = require('express');

const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Getting sequelize for database and initializing
const db = require('./models');
db.sequelize.sync();

// For Express Routes
const studentRoutes = require('./routes/student-routes');
const teacherRoutes = require('./routes/teacher-routes');

app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

exports.createUser = functions.https.onRequest((req, res) => {

    const body = JSON.parse(req.body);

    return admin.auth().setCustomUserClaims(body.uid, {
        role: body.role,
    }).then(() => {
        return {
          message: `User [${body.uid}] has been given role: ${body.role}.`
        }
      }).catch(err => {
        return err;
      });
    

});

exports.app = functions.https.onRequest(app);
