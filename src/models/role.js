module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define("Role", {
        roleId: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        roleName: { 
            type: DataTypes.STRING, 
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