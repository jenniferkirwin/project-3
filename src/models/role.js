'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Role.associate = function(models) {
    Role.hasMany(models.SchoolRole, {
      allowNull: false
    });
  };
  return Role;
};