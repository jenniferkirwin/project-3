import Sequelize from "sequelize";
import { initRole } from "./role";
import { initUser } from "./user";
import { initSchool } from "./school";
import { initClass } from "./class";
import { initEnrollment } from "./enrollment";
import { initAssignment } from "./assignment";
import { initAnnouncement } from "./announcement";
import { initSubmitted } from "./submitted";

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.ts")[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db: any = {
    sequelize,
    Sequelize,
    Role: initRole(sequelize),
    User: initUser(sequelize),
    School: initSchool(sequelize),
    Class: initClass(sequelize),
    Enrollment: initEnrollment(sequelize),
    Assignment: initAssignment(sequelize),
    Announcement: initAnnouncement(sequelize),
    Submitted: initSubmitted(sequelize),
  };
  
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
  export default db;