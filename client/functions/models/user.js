'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Course, {
      allowNull: false
    });
    User.hasMany(models.Enrollment, {
      allowNull: false
    });
    User.hasMany(models.SchoolRole, {
      allowNull: false
    });
    User.hasMany(models.Submitted, {
      allowNull: false
    });
  };
  return User;
};