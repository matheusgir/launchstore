const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  password: "9319232",
  host: "localhost",
  port: 5432,
  database: "launchstoredb",
});
