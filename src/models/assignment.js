'use strict';
module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define('Assignment', {
    assignmentId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    assignmentText: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Assignment.associate = function(models) {
    Assignment.hasMany(models.Submitted, {
      allowNull: false
    });
    Assignment.belongsTo(models.Course);
  };
  return Assignment;
};