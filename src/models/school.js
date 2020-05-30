module.exports = function(sequelize, DataTypes) {
    const School = sequelize.define("School", {
        schoolId: { 
            type: DataTypes.UUID, 
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4 
        },
        schoolName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        primaryColor: { 
            type: DataTypes.NUMBER, 
            allowNull: false 
        },
        secondaryColor: { 
            type: DataTypes.NUMBER, 
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