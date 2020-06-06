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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Getting sequelize for database and initializing
const db = require('./models');
db.sequelize.sync();

// Seeding database
// const seeder = require('./seeders/20200530173135-demo-school');
// seeder();


// For Express Routes
// const studentRoutes = require('./routes/student-routes');
// const teacherRoutes = require('./routes/teacher-routes');
const userRoutes = require('./routes/user-routes');

// app.use('/student', studentRoutes);
// app.use('/teacher', teacherRoutes);
app.use('/user', userRoutes);

// Functions
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

exports.createUser = functions.auth.user().onCreate(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
        role: 'student',
    }).then(() => {
        return {
          message: `User [${user.uid}] has been given role: student}.`
        }
      }).catch(err => {
        return err;
      });
    

});

exports.app = functions.https.onRequest(app);