module.exports = function(sequelize, DataTypes) {
    const Enrollment = sequelize.define("Enrollment", {
        enrollmentId: { 
            type: Sequelize.UUID, 
            primaryKey: true, 
            defaultValue: Sequelize.UUIDV4 
        },
    });

    Enrollment.associate = function(models) {
        Enrollment.belongsTo(models.User);
        Enrollment.belongsTo(models.Class);
    }
  
    return Enrollment;
  };