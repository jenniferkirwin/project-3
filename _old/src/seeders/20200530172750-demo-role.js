'use strict';

const roleSeeds = [
  {
    roleName: "Student",
  },
  {
    roleName: "Teacher",
  },
  {
    roleName: "Admin",
  },
]

module.exports = function seedRoles() {
  return roleSeeds.forEach( (role) => {
    db.Role.create({
      roleName: role.roleName,
    })
  });
}
