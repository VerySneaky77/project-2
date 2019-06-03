// Dependencies
var Sequelize = require("sequelize");

// Sequelize - (database, location, password)
var sequelize = new Sequelize("contacts_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;