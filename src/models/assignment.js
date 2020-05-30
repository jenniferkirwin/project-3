module.exports = function(sequelize, DataTypes) {
    const Assignment = sequelize.define("Assignment", {
        assignmentId: { 
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4 
        },
        assignmentText: { 
            type: Sequelize.STRING, 
            allowNull: false 
        },
    });

    Assignment.associate = function(models) {
        Assignment.hasMany(models.Submitted, {
            foreignKey: "assignmentId"
        });
        Assignment.belongsTo(models.Class);
    }
  
    return Assignment;
  };