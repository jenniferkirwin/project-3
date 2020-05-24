import Sequelize from "sequelize";

interface EnrollmentAttributes {
    enrollmentId: string;
}

type EnrollmentInstance = Sequelize.Instance<EnrollmentAttributes> & EnrollmentAttributes;
type EnrollmentModel = Sequelize.Model<EnrollmentInstance, EnrollmentAttributes>;

export function initEnrollment(sequalize: Sequelize.Sequelize): EnrollmentModel {
    const attributes: SequelizeAttributes<EnrollmentAttributes> = {
      enrollmentId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    };
    const Enrollment = sequalize.define<EnrollmentInstance, EnrollmentAttributes>("Enrollment", attributes);
    Enrollment.associate = models => {
        Enrollment.belongsTo(models.User, { as: "user", foreignKey: "userID" });
        Enrollment.belongsTo(models.Class, { as: "class", foreignKey: "classID" });
    }

    return Enrollment;
  };