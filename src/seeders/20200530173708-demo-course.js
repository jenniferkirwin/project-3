'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Courses", [
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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Courses", null, {});
  }
};
