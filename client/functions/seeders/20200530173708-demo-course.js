'use strict';
const db = require('../models');

const courseSeeds = [
  {
    courseName: "Herbology",
  },
  {
    courseName: "Biology",
  },
  {
    courseName: "History",
  },
  {
    courseName: "Chemistry",
  },
  {
    courseName: "Astronomy",
  }
];

module.exports = function seedCourses() {
  return courseSeeds.forEach( (course) => {
    db.Course.create({
      courseName: course.courseName,
    })
  });
};
