module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("Role", {
        roleId: { 
            type: Sequelize.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        roleName: { 
            type: Sequelize.STRING, 
            allowNull: false, 
        },
    });

    Role.associate = function(models) {
        Role.hasMany(models.SchoolRole, {
            foreignKey: "roleId"
        });
    }
  
    return Role;
  };