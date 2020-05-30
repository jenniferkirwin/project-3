module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        userId: { 
            type: Sequelize.UUID, 
            primaryKey: true, 
            defaultValue: Sequelize.UUIDV4 
        },
        firstName: { 
            type: Sequelize.STRING, 
            allowNull: false 
        },
        lastName: { 
            type: Sequelize.STRING, 
            allowNull: false 
        },
        email: { 
            type: Sequelize.STRING, 
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