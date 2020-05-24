import Sequelize from "sequelize";

interface UserAttributes {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
}

type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes;
type UserModel = Sequelize.Model<UserInstance, UserAttributes>;

export function initUser(sequalize: Sequelize.Sequelize): UserModel {
    const attributes: SequelizeAttributes<UserAttributes> = {
      userId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      firstName: { type: Sequelize.STRING, allowNull: false },
      lastName: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
    };
    const User = sequalize.define<UserInstance, UserAttributes>("User", attributes);
    User.associate = models => {
        User.hasMany(models.Class);
        User.hasMany(models.Enrollment);

        // Can add below for multiple school functionality
        //User.hasMany(models.School);

        // Add below for the 1:many relationships Scott mentioned?
        // User.hasMany(models.Assignment);
        // User.hasMany(models.Announcement);
        // User.hasMany(models.Submitted);
        User.belongsTo(models.Role, { as: "role", foreignKey: "roleID" });
    }

    return User;
  };