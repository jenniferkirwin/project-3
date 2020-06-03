const functions = require('firebase-functions');

module.exports = {
  development: {
    username: functions.config().awsdatabase.username,
    password: functions.config().awsdatabase.password,
    database: functions.config().awsdatabase.database,
    host: functions.config().awsdatabase.host,
    port: 3306,
    dialect: 'mysql'
  },
  test: {
    username: functions.config().awsdatabase.username,
    password: functions.config().awsdatabase.password,
    database: functions.config().awsdatabase.database,
    host: functions.config().awsdatabase.host,
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: functions.config().awsdatabase.username,
    password: functions.config().awsdatabase.password,
    database: functions.config().awsdatabase.database,
    host: functions.config().awsdatabase.host,
    port: 3306,
    dialect: 'mysql'
  }
}