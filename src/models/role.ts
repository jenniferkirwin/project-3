import Sequelize from "sequelize";

interface RoleAttributes {
    roleId: number;
    roleName: string;
}

type RoleInstance = Sequelize.Instance<RoleAttributes> & RoleAttributes;
type RoleModel = Sequelize.Model<RoleInstance, RoleAttributes>;

export function initRole(sequalize: Sequelize.Sequelize): RoleModel {
    const attributes: SequelizeAttributes<RoleAttributes> = {
      roleId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      roleName: { type: Sequelize.STRING, allowNull: false, },
    };
    const Role = sequalize.define<RoleInstance, RoleAttributes>("Role", attributes);
    Role.associate = models => {
      Role.hasMany(models.SchoolRole);
    };
    
    return Role;
  };