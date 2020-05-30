module.exports = function(sequelize, DataTypes) {
    const Submitted = sequelize.define("Submitted", {
        submittedId: { 
            type: Sequelize.UUID, 
            primaryKey: true, 
            defaultValue: Sequelize.UUIDV4 
        },
        submittedContent: { 
            type: Sequelize.STRING, 
            allowNull: true 
        },
        grade: { 
            type: Sequelize.STRING, 
            defaultValue: null 
        },
    });

    Submitted.associate = function(models) {
        Submitted.belongsTo(models.Assignment);
    }
  
    return Submitted;
  };