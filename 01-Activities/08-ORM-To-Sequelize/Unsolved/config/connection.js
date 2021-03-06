// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
  },

  // jawsDB
  jawsDB: {
    port: 3306,
    host: "<host name>",
    user: "<name of user>",
    password: "<password>",
    database: "<name of database>"
  }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
