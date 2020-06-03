'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Schools", [
      {
        schoolName: "Hogwarts",
        primaryColor: "530000",
        secondaryColor: "530000"
      },
      {
        schoolName: "Harvard",
        primaryColor: "530000",
        secondaryColor: "530000"
      },
      {
        schoolName: "Yale",
        primaryColor: "530000",
        secondaryColor: "530000"
      },
      {
        schoolName: "Starfleet Academy",
        primaryColor: "530000",
        secondaryColor: "530000"
      },
      {
        schoolName: "Dartmouth",
        primaryColor: "530000",
        secondaryColor: "530000"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Schools", null, {});
  }
};