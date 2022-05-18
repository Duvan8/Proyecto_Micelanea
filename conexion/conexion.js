const mysql = require('mysql');//HACE LA CONEXION CON LA BASE DE DATOS
module.exports = () =>
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bdmicelanea'
    }, console.log('conexion exitosa'),
    'single');