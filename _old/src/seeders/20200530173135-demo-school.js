'use strict';

const schoolSeeds = [
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
]

module.exports = function seedSchools() {
  return schoolSeeds.forEach( (school) => {
    db.School.create({
      schoolName: school.schoolName,
      primaryColor: school.primaryColor,
      secondaryColor: school.secondaryColor
    })
  });
};