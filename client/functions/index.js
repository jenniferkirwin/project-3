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