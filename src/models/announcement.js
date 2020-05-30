module.exports = function(sequelize, DataTypes) {
    const Announcement = sequelize.define("Announcement", {
      announcementId: { 
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4 
        },
      announcementText: { 
          type: DataTypes.STRING,
          allowNull: false 
        },
    });

    Announcement.associate = function(models) {
        Announcement.belongsTo(models.Class);
    }
  
    return Announcement;
  };