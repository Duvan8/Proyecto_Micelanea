const req = require("express/lib/request");
const res = require("express/lib/response");
const conexion = require("../conexion/conexion");
const connection = require('../conexion/conexion');
//const cnn = connection();
const controlador = {};

controlador.index = (req, res, next) => {
  res.render("index");
};

controlador.proveedores = (req,res,next) =>{
    res.render("proveedores");
}
controlador.proveedor = (req, res, next) => {
    const ped = req.body.nit;
    const nombre = req.body.nombre;
    const dir = req.body.direccion;
    const cel = req.body.celular;
    const id = req.body.id;

    console.log(ped,nombre,dir,cel,id)

    conexion.query('INSERT INTO proveedores SET ?',{pedido_prov : ped, nombre_prov : nombre, id_prov : id, direccion_prov : dir, telefono_prov : cel}, (err)=>{
        if(err){
            next(new Error(err));
        }
        else{
            res.redirect('/proveedores');
        }
    });
};

controlador.usuarios = (req, res, next) => {
  conexion.query("SELECT * FROM usuarios", function (error, results, fields) {
    if (error) throw error;

    results.forEach((result) => {
      console.log(result);
    });
  });
  conexion.end();
};

module.exports = controlador;
