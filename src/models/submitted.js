'use strict';
module.exports = (sequelize, DataTypes) => {
  const Submitted = sequelize.define('Submitted', {
    submittedId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    submittedContent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Submitted.associate = function(models) {
    Submitted.belongsTo(models.Assignment);
    Submitted.belongsTo(models.User);
  };
  return Submitted;
};