module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        userId: { 
            type: DataTypes.UUID, 
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4 
        },
        firstName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        lastName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        email: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
    });

    User.associate = function(models) {
        User.hasMany(models.Class, {
            foreignKey: "userId"
        });
        User.hasMany(models.Enrollment, {
            foreignKey: "userId"
        });
        User.hasMany(models.SchoolRole, {
            foreignKey: "userId"
        });
    }
  
    return User;
  };