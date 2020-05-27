import Sequelize from "sequelize";

interface SchoolRoleAttributes {
    schoolRoleId: string;
}

type SchoolRoleInstance = Sequelize.Instance<SchoolRoleAttributes> & SchoolRoleAttributes;
type SchoolRoleModel = Sequelize.Model<SchoolRoleInstance, SchoolRoleAttributes>;

export function initSchoolRole(sequalize: Sequelize.Sequelize): SchoolRoleModel {
    const attributes: SequelizeAttributes<SchoolRoleAttributes> = {
      schoolRoleId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    };
    const SchoolRole = sequalize.define<SchoolRoleInstance, SchoolRoleAttributes>("SchoolRole", attributes);
    SchoolRole.associate = models => {
        SchoolRole.belongsTo(models.User, { as: "user", foreignKey: "userId" });
        SchoolRole.belongsTo(models.Role, { as: "role", foreignKey: "roleId"});
    }

    return SchoolRole;
  };