module.exports = function(sequelize, DataTypes) {
    const Assignment = sequelize.define("Assignment", {
        assignmentId: { 
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4 
        },
        assignmentText: { 
            type: DataTypes.STRING, 
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