const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  // create a position
  createPosition(position) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }
}

module.exports = new DB(connection);
