module.exports = function(sequelize, DataTypes) {
    const School = sequelize.define("School", {
        schoolId: { 
            type: Sequelize.UUID, 
            primaryKey: true, 
            defaultValue: Sequelize.UUIDV4 
        },
        schoolName: { 
            type: Sequelize.STRING, 
            allowNull: false 
        },
        primaryColor: { 
            type: Sequelize.NUMBER, 
            allowNull: false 
        },
        secondaryColor: { 
            type: Sequelize.NUMBER, 
            allowNull: false 
        },
    });

    School.associate = function(models) {
        School.hasMany(models.Class, {
            foreignKey: "schoolId"
        });
    }
  
    return School;
  };