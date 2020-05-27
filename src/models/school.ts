import Sequelize from "sequelize";

interface SchoolAttributes {
    schoolId: string;
    schoolName: string;
    primaryColor: number;
    secondaryColor: number;
}

type SchoolInstance = Sequelize.Instance<SchoolAttributes> & SchoolAttributes;
type SchoolModel = Sequelize.Model<SchoolInstance, SchoolAttributes>;

export function initSchool(sequalize: Sequelize.Sequelize): SchoolModel {
    const attributes: SequelizeAttributes<SchoolAttributes> = {
      schoolId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      schoolName: { type: Sequelize.STRING, allowNull: false },
      primaryColor: { type: Sequelize.NUMBER, allowNull: false },
      secondaryColor: { type: Sequelize.NUMBER, allowNull: false },
    };
    const School = sequalize.define<SchoolInstance, SchoolAttributes>("School", attributes);
    School.associate = models => {
        School.hasMany(models.Class);
    }

    return School;
  };