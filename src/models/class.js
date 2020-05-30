module.exports = function(sequelize, DataTypes) {
    const Class = sequelize.define("Class", {
        classId: { 
            type: DataTypes.UUID, 
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4 
        },
        className: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
    });

    Class.associate = function(models) {
        Class.hasMany(models.Enrollment, {
            foreignKey: "classId"
        });
        Class.hasMany(models.Assignment, {
            foreignKey: "classId"
        });
        Class.hasMany(models.Announcement, {
            foreignKey: "classId"
        });
        Class.belongsTo(models.School);
        Class.belongsTo(models.User);
    }
  
    return Class;
  };