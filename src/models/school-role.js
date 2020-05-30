module.exports = function(sequelize, DataTypes) {
    const SchoolRole = sequelize.define("SchoolRole", {
        schoolRoleId: { 
            type: Sequelize.UUID, 
            primaryKey: true, 
            defaultValue: Sequelize.UUIDV4 
        },
    });

    SchoolRole.associate = function(models) {
        SchoolRole.belongsTo(models.User);
        SchoolRole.belongsTo(models.Role);
    }
  
    return SchoolRole;
  };