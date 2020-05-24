import Sequelize from "sequelize";

interface ClassAttributes {
    classId: string;
    className: string;
}

type ClassInstance = Sequelize.Instance<ClassAttributes> & ClassAttributes;
type ClassModel = Sequelize.Model<ClassInstance, ClassAttributes>;

export function initClass(sequalize: Sequelize.Sequelize): ClassModel {
    const attributes: SequelizeAttributes<ClassAttributes> = {
      classId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      className: { type: Sequelize.STRING, allowNull: false },
    };
    const Class = sequalize.define<ClassInstance, ClassAttributes>("Class", attributes);
    Class.associate = models => {
        Class.hasMany(models.Enrollment);
        Class.hasMany(models.Assignment);
        Class.hasMany(models.Announcement);
        Class.belongsTo(models.School, { as: "school", foreignKey: "schoolID" });
    }

    return Class;
  };