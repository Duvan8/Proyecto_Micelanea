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
    console.log('error en la conexion')
  } else {
    console.log("CONEXION EXITOSA");
  }
});

conexion.query("SELECT * FROM proveedores", function (error, results, fields) {
  if (error) throw error;
  results.forEach((result) => {
    console.log(result);
  });
}); 
conexion.query("SELECT * FROM facturacion", function (error, results, fields) {
  if (error) throw error;
  results.forEach((result) => {
    console.log(result);
  });
}); 

conexion.query("SELECT * FROM entrada", function (error, results, fields) {
  if (error) throw error;
  results.forEach((result) => {
    console.log(result);
  });
}); 

module.exports = conexion;