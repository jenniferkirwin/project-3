import Sequelize from "sequelize";

interface AnnouncementAttributes {
    announcementId: string;
    announcementText: string;
}

type AnnouncementInstance = Sequelize.Instance<AnnouncementAttributes> & AnnouncementAttributes;
type AnnouncementModel = Sequelize.Model<AnnouncementInstance, AnnouncementAttributes>;

export function initAnnouncement(sequalize: Sequelize.Sequelize): AnnouncementModel {
    const attributes: SequelizeAttributes<AnnouncementAttributes> = {
      announcementId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      announcementText: { type: Sequelize.STRING, allowNull: false },
    };
    const Announcement = sequalize.define<AnnouncementInstance, AnnouncementAttributes>("Announcement", attributes);
    Announcement.associate = models => {
        Announcement.belongsTo(models.Class, { as: "class", foreignKey: "classID" });
    }

    return Announcement;
  };