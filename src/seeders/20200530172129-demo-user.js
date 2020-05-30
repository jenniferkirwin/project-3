'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("People", [
      {
        firstName: "Bruce",
        lastName: "Wayne",
        email: "iamdark@bats.com"
      },
      {
        firstName: "Tony",
        lastName: "Stark",
        email: "cool@genius.com"
      },
      {
        firstName: "Gordon",
        lastName: "Ramsay",
        email: "icookstuff@food.com"
      },
      {
        firstName: "David",
        lastName: "Ortiz",
        email: "ihitdings@moonshots.com"
      },
      {
        firstName: "Tom",
        lastName: "Nook",
        email: "icrossalltheanimals@game.com"
      },
      {
        firstName: "Daisy",
        lastName: "Mae",
        email: "icrossoneanimal@game.com"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("People", null, {});
  }
};
