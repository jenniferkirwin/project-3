'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Course.associate = function(models) {
    Course.hasMany(models.Enrollment, {
      allowNull: false
    });
    Course.hasMany(models.Assignment, {
      allowNull: false
    });
    Course.hasMany(models.Announcement, {
      allowNull: false
    });
    Course.belongsTo(models.School);
    Course.belongsTo(models.User);
  };
  return Course;
};