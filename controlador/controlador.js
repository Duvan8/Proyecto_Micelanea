const bcryptjs = require("bcryptjs");
const req = require("express/lib/request");
const res = require("express/lib/response");
const conexion = require("../conexion/conexion");
//const cnn = connection();
const controlador = {};

controlador.index = (req, res, next) => {
  res.render("index");
};

controlador.proveedores = (req, res, next) => {
  res.render("proveedores");
};
controlador.administrador = (req, res, next) => {
  res.render("administrador");
};
controlador.proveedor = (req, res, next) => {
  const ped = req.body.nit;
  const nombre = req.body.nombre;
  const dir = req.body.direccion;
  const cel = req.body.celular;
  const id = req.body.id;
  console.log(ped, nombre, dir, cel, id);

  conexion.query(
    "INSERT INTO proveedores SET ?",
    {
      pedido_prov: ped,
      nombre_prov: nombre,
      id_prov: id,
      direccion_prov: dir,
      telefono_prov: cel,
    },
    (err) => {
      if (err) {
        next(new Error(err));
      } else {
        res.redirect("/proveedores");
      }
    }
  );
};

controlador.inserusu = async (req, res, next) => {
  const doc = req.body.doc;
  const pass = req.body.pass;
  const nom = req.body.nom;
  const ape = req.body.ape;
  const rol = req.body.rol;
  const nac = req.body.nac;
  const cel = req.body.cel;
  const mail = req.body.mail;
  const est = req.body.est;
  const con = await bcryptjs.hash(pass, 8);

  conexion.query(
    "INSERT INTO usuarios SET ?",
    {
      doc_usu: doc,
      nom_usu: nom,
      apellido_usu: ape,
      rol: rol,
      fecha_nac: nac,
      celular: cel,
      correo: mail,
      estado: est,
      contraseña: con,
    },
    (err) => {
      if (err) {
        throw err;
        console.log("Error en insertar usuarios");
      } else {
        console.log("SE INSERTO CON EXITO EN USUARIOS");
        res.redirect("/administrador");
      }
    }
  );
};

controlador.administrador = async(req, res, next) => {
  conexion.query('SELECT * FROM usuarios', (err, resbd) => {
      if (err) {
          next(new Error(err))
          console.log("Error en la consulta")
      } else {
          console.log(resbd)
          res.render('administrador', { datos: resbd });
      }
  })
}

module.exports = controlador;
