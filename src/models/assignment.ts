import Sequelize from "sequelize";

interface AssignmentAttributes {
    assignmentId: string;
    assignmentText: string;
}

type AssignmentInstance = Sequelize.Instance<AssignmentAttributes> & AssignmentAttributes;
type AssignmentModel = Sequelize.Model<AssignmentInstance, AssignmentAttributes>;

export function initAssignment(sequalize: Sequelize.Sequelize): AssignmentModel {
    const attributes: SequelizeAttributes<AssignmentAttributes> = {
      assignmentId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      assignmentText: { type: Sequelize.STRING, allowNull: false },
    };
    const Assignment = sequalize.define<AssignmentInstance, AssignmentAttributes>("Assignment", attributes);
    Assignment.associate = models => {
        Assignment.hasMany(models.Submitted);
        Assignment.belongsTo(models.Class, { as: "class", foreignKey: "classID" });
    }

    return Assignment;
  };