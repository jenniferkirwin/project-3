import Sequelize from "sequelize";

interface RoleAttributes {
    roleId: string;
    student: boolean;
    teacher: boolean;
    admin: boolean;
}

type RoleInstance = Sequelize.Instance<RoleAttributes> & RoleAttributes;
type RoleModel = Sequelize.Model<RoleInstance, RoleAttributes>;

export function initRole(sequalize: Sequelize.Sequelize): RoleModel {
    const attributes: SequelizeAttributes<RoleAttributes> = {
      roleId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      student: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      teacher: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      admin: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    };
    const Role = sequalize.define<RoleInstance, RoleAttributes>("Role", attributes);
    Role.associate = models => {
      Role.hasMany(models.User);
    };
    
    return Role;
  };