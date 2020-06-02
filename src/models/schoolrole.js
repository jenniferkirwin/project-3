'use strict';
module.exports = (sequelize, DataTypes) => {
  const SchoolRole = sequelize.define('SchoolRole', {
    schoolRoleId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, {});
  SchoolRole.associate = function(models) {
    SchoolRole.belongsTo(models.User);
    SchoolRole.belongsTo(models.Role);
  };
  return SchoolRole;
};