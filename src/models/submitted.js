module.exports = function(sequelize, DataTypes) {
    const Submitted = sequelize.define("Submitted", {
        submittedId: { 
            type: DataTypes.UUID, 
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4 
        },
        submittedContent: { 
            type: DataTypes.STRING, 
            allowNull: true 
        },
        grade: { 
            type: DataTypes.STRING, 
            defaultValue: null 
        },
    });

    Submitted.associate = function(models) {
        Submitted.belongsTo(models.Assignment);
        Submitted.belongsTo(models.User);
    }
  
    return Submitted;
  };