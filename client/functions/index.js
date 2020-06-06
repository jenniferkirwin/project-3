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
// const seeder = require('./seeders/20200530172750-demo-role');
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

exports.createUser =functions.https.onCall((data, context) => {

    //Create User
    return admin.auth().createUser({
        email: data.email,
        emailVerified: false,
        password: data.password,
        disabled: false
    }).then((userRecord) => {
        admin.auth().setCustomUserClaims(userRecord.uid, {
            role: data.role
        }).then(() => {
            return {
              message: `${data.email} has has been added with a ${data.user} role.`
            }
        }).catch(err => {
            return err;
        });
    })    
});

exports.app = functions.https.onRequest(app);