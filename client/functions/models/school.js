'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    schoolId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primaryColor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secondaryColor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  School.associate = function(models) {
    School.hasMany(models.Course, {
      allowNull: false
    });
    School.hasMany(models.SchoolRole, {
      allowNull: false
    });
  };
  return School;
};