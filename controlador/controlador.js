const req = require('express/lib/request');
const res = require('express/lib/response');
const conexion = require('../conexion/conexion');
//const cnn = connection();   
const controlador =  {};

controlador.usuarios = (req,res,next) => {
    conexion.query('SELECT * FROM usuarios',function(error,results,fields){
        if(error)
        throw error;

        results.forEach(result => {
            console.log(result);
        });
    })
    conexion.end();
}