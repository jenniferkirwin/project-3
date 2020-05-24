import Sequelize from "sequelize";

interface SubmittedAttributes {
    submittedId: string;
    submittedContent: string;
    grade: string;
}

type SubmittedInstance = Sequelize.Instance<SubmittedAttributes> & SubmittedAttributes;
type SubmittedModel = Sequelize.Model<SubmittedInstance, SubmittedAttributes>;

export function initSubmitted(sequalize: Sequelize.Sequelize): SubmittedModel {
    const attributes: SequelizeAttributes<SubmittedAttributes> = {
      submittedId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      submittedContent: { type: Sequelize.STRING, allowNull: true },
      grade: { type: Sequelize.STRING, defaultValue: null },
    };
    const Submitted = sequalize.define<SubmittedInstance, SubmittedAttributes>("Submitted", attributes);
    Submitted.associate = models => {
        Submitted.belongsTo(models.Assignment, { as: "assignment", foreignKey: "assignmentID" });
    }

    return Submitted;
  };