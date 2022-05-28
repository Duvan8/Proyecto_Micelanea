const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  database: "bdmiscelanea",
  user: "root",
  password: "",
});
conexion.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("CONEXION EXITOSA");
  }
});

/* conexion.query("SELECT * FROM proveedores", function (error, results, fields) {
  if (error) throw error;
  results.forEach((result) => {
    console.log(result);
  });
}); */

module.exports = conexion;