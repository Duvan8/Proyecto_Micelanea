const mysql = require("mysql"); //HACE LA CONEXION CON LA BASE DE DATOS
const Connection = require("mysql/lib/Connection");
module.exports = () =>
  mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "",
      database: "bdmicelanea",
    },
    "single",console.log("conexion exitosa"),
  );

module.exports = Connection;
