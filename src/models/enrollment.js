module.exports = function(sequelize, DataTypes) {
    const Enrollment = sequelize.define("Enrollment", {
        enrollmentId: { 
            type: DataTypes.UUID, 
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4 
        },
    });

    Enrollment.associate = function(models) {
        Enrollment.belongsTo(models.User);
        Enrollment.belongsTo(models.Class);
    }
  
    return Enrollment;
  };