const conexion = require("../conexion/conexion");
const { render } = require("ejs");
const bcryptjs = require("bcryptjs");
const req = require("express/lib/request");
const controlador = {};
//const cnn = connection();

//PDF
const PDF = require("pdfkit");
const fs = require("fs");
//PDF FINISH

controlador.index = (req, res, next) => {
  res.render("index");
};
controlador.proveedores = (req, res, next) => {
  res.render("proveedores");
};
controlador.administrador = (req, res, next) => {
  res.render("administrador");
};
// <<<<<<< HEAD
controlador.ventas = (req, res, next) => {
  res.render("ventas");
};
controlador.entrada = (req, res, next) => {
  res.render("entrada");
};

// =======
controlador.devolucion = (req, res, next) => {
  res.render("devolucion");
};

//CONTROLADORES DE PROVEEDORES
//INSERTAR PROVEEDORES
// >>>>>>> 8d89c01c0165a579511a6820f8476673239f978e
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
//ACTUALIZAR PROVEEDORES
controlador.actuprov = async (req, res) => {
  const ped = req.body.dd;
  const nom = req.body.uu;
  const id = req.body.aa;
  const dir = req.body.cc;
  const tel = req.body.rr;

  console.log("datos para consulta" + ped + nom + id + dir + tel);

  conexion.query(
    'UPDATE proveedores SET nombre_prov="' +
      nom +
      '",id_prov="' +
      id +
      '", direccion_prov="' +
      dir +
      '", telefono_prov="' +
      tel +
      '"WHERE pedido_prov="' +
      ped +
      '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar proveedores");
        throw err;
      } else {
        res.redirect("proveedores");
      }
    }
  );
};
//ELIMINAR PROVEEDORES
controlador.eliprov = async (req, res) => {
  const doc = req.body.dd;
  conexion.query(
    'DELETE FROM proveedores WHERE pedido_prov="' + doc + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en proveedores");
        throw err;
      } else {
        console.log("proveedore eliminado");
        res.redirect("proveedores");
      }
    }
  );
};
//CONSULTAR PROVEEDORES
controlador.proveedores = async (req, res) => {
  conexion.query("SELECT * FROM proveedores", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      res.render("proveedores", { datos: resbd });
    }
  });
};
//CIERRA CONTROLADORES DE PROVEEDORES

//CONTROLADORES DE USUARIOS
//INSERTAR USUARIOS
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
  console.log("antes de encriptar", pass);
  console.log("contraseña para insetar usuarios", con);

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
      clave: con,
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
//ACTUALIZAR USUARIOS
controlador.actuadmin = async (req, res, next) => {
  const doc = req.body.dd;
  const usu = req.body.uu;
  const ape = req.body.aa;
  const con = req.body.cc;
  const rol = req.body.rr;
  const fec = req.body.ff;
  const cel = req.body.tt;
  const est = req.body.ee;
  const cor = req.body.mm;
  const pass = await bcryptjs.hash(con, 8);

  conexion.query(
    'UPDATE usuarios SET nom_usu="' +
      usu +
      '",apellido_usu="' +
      ape +
      '", rol="' +
      rol +
      '", fecha_nac="' +
      fec +
      '",celular="' +
      cel +
      '",correo="' +
      cor +
      '",estado="' +
      est +
      '",clave="' +
      pass +
      '" WHERE doc_usu="' +
      doc +
      '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar usuarios");
        throw err;
      } else {
        console.log("actualizado");
        res.redirect("administrador");
      }
    }
  );
};
//ELIMINAR USUARIOS
controlador.eliusu = async (req, res) => {
  const doc = req.body.dd;
  conexion.query(
    'DELETE FROM usuarios WHERE doc_usu="' + doc + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en usuarios");
        throw err;
      } else {
        console.log("usuario eliminado");
        res.redirect("administrador");
      }
    }
  );
};
//CONSULTAR USUARIOS
controlador.administrador = async (req, res, next) => {
  conexion.query("SELECT * FROM usuarios", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      res.render("administrador", { datos: resbd });
    }
  });
};
//CIERRA CONTROLADOR DE USUARIOS
controlador.login = async (req, res, next) => {
  const usu = await req.body.nom;
  const con = await req.body.con;
  console.log(usu, con);
  conexion.query(
    "SELECT * FROM usuarios WHERE nom_usu=?",
    [usu],
    async (err, results) => {
      if (err) {
        next(new Error("Error de consulta login", err));
      }
      //nos sirve para encontrar solo al usuario
      if (results != 0) {
        bcryptjs.compare(con, results[0].clave).then((resp) => {
          //res === true
          if (resp === true) {
            let rol = results[0].rol;
            console.log(rol);
            switch (rol) {
              case "administrador":
                res.redirect("interfaz");
                break;
              case "empleado":
                res.redirect("interfaz");
                break;
            }
          } else {
            console.log("repsuesta incorrecta");
            res.redirect("/");
          }
        });

        /* console.log("clave para comparar" + cla);
        if (bcryptjs.compare(cla, results[0].clave)) {
          console.log("datos correctos segundo");
          let rol = results[0].rol;
          console.log(rol);
          switch (rol) {
            case "administrador":
              res.redirect("interfaz");
              break;
            case "empleado":
              res.redirect("interfaz");
              break;
          }
        } else {
          console.log("datos incorrectos segundo else");
          res.redirect("/");
        } */
      } else {
        console.log("datos incorrectos");
        res.redirect("/");
      }
    }
  );
};
controlador.inserdev = (req, res, next) => {
  const id = req.body.nit;
  const nom = req.body.nombre;
  const cant = req.body.cantidad;
  const fec = req.body.fecha;
  const mov = req.body.motivo;

  conexion.query(
    "INSERT INTO devoluciones SET ?",
    {
      id_prov: id,
      nombre_dev: nom,
      cantidad_dev: cant,
      motivo_dev: mov,
      fecha_dev: fec,
    },
    (err) => {
      if (err) {
        console.log("error al insertar devoluciones" + err);
        throw err;
      } else {
        console.log("se inserto exitosamente");
        res.redirect("/devolucion");
      }
    }
  );
};
controlador.actudev = async (req, res, next) => {
  const id = req.body.ii;
  const nom = req.body.nn;
  const can = req.body.cc;
  const mov = req.body.mm;
  const fec = req.body.ff;

  conexion.query(
    'UPDATE devoluciones SET nombre_dev="' +
      nom +
      '", cantidad_dev="' +
      can +
      '", motivo_dev="' +
      mov +
      '", fecha_dev="' +
      fec +
      '" WHERE id_prov="' +
      id +
      '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar devoluciones");
        throw err;
      } else {
        console.log("actualizado");
        res.redirect("devolucion");
      }
    }
  );
};
controlador.elidev = async (req, res) => {
  const id = req.body.ii;
  conexion.query(
    'DELETE FROM devoluciones WHERE id_prov="' + id + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en devoluciones");
        throw err;
      } else {
        console.log("devolucion eliminado");
        res.redirect("devolucion");
      }
    }
  );
};
controlador.devolucion = async (req, res, next) => {
  conexion.query("SELECT * FROM devoluciones", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      res.render("devolucion", { datos: resbd });
    }
  });
};




//En este estoy trabajando - JULIAN
//FACTURACION - VENTAS
<<<<<<< HEAD
// INSERTAR FACTURA
controlador.factura = (req, res, next) => {
  const ped = req.body.co;
  const nombre = req.body.do;
  const dir = req.body.cod;
  const cel = req.body.fe;
  const id = req.body.ca;
  const val = req.body.va;
  console.log(ped, nombre, dir, cel, id,val);

  conexion.query(
    "INSERT INTO facturacion SET ?",
    {
      codigo_p: ped,
      doc_usu: nombre,
      codigo_fac: dir,
      fecha_fac: cel,
      cantidad_fac: id,
      valor_fac: val,
=======

controlador.prubfact = (req, res, next) => {
  res.render("prubfact");
};
// INSERTAR FACTURA
controlador.ventas = (req, res, next) => {
  const c = req.body.co;
  const d = req.body.do;
  const co = req.body.cod;
  const fe = req.body.fe;
  const ca = req.body.ca;
  const va = req.body.va;

  //INSERTAR FACTURA
  conexion.query(
    "INSERT INTO facturacion SET ?",
    {
      codigo_p: c,
      doc_usu: d,
      codigo_fac: co,
      fecha_fac: fe,
      cantidad_fac: ca,
      valor_fac: va,
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd
    },
    (err) => {
      if (err) {
        next(new Error(err));
      } else {
        res.redirect("/ventas");
      }
    }
  );
};
<<<<<<< HEAD
=======

//CONSULTA INDIVIDUAL
controlador.prubfact = async (req, res, next) => {
  const fact = req.body.cod;
  conexion.query(
    'SELECT * FROM productos WHERE codigo_p ="' + fact + '" ',
    (err, resbd) => {
      if (err) {
        next(new Error(err));
        console.log("Error en la consulta");
      } else {
        res.render("prubfact", { datos: resbd });
      }
    }
  );
};
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd

// CONSULTAR FACTURA

controlador.ventas = async (req, res, next) => {
  conexion.query("SELECT * FROM facturacion", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      res.render("ventas", { datos: resbd });
    }
  });
};

//ACTUALIZAR FACTURA
controlador.actufac = async (req, res) => {
  const co = req.body.dd;
  const doc = req.body.uu;
  const cod = req.body.aa;
  const fe = req.body.cc;
  const can = req.body.rr;
  const val = req.body.vv;

  conexion.query(
    'UPDATE facturacion SET codigo_fac="' +
      cod +
      '",codigo_p="' +
      co +
      '", fecha_fac="' +
      fe +
      '", cantidad_fac="' +
      can +
      '", valor_fac="' +
      val +
      '"WHERE doc_usu="' +
      doc +
      '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar facturas");
        throw err;
      } else {
        res.redirect("ventas");
      }
    }
  );
};
//ACTUALIZAR FACTURA
// controller.actualizarfactura=async(req,res,next)=>{
//   const codpf=req.body.codpro;
//   const docf=req.body.docemple;
//   const codff=req.body.codfac;
//   const fecf=req.body.fechafac;
//   const canf=req.body.cantprod;
//   const valf=req.body.valorfac;

//   cnn.query('UPDATE facturacion SET doc_usu="'+docf+'",codigo_fac="'+codff+'", fecha_fac="'+fecf+'",cantidad_fac="'+canf+', valor_fac="'+valf+'", WHERE codigo_p="'+codpf+'"', async(err,respbb)=>{
//     if(err){
//         next(new Error(err));
//     }
//     else{
//         console.log("Actualizado")
//         res.redirect('consulta')
//       }});
// }

//BORRAR FACTURA
controlador.borrarfac = (req, res, next) => {
  const cod = req.body.dd;
  conexion.query(
    'DELETE FROM facturacion WHERE codigo_fac="' + cod + '"',
    async (err, respbb) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log("eliminado");
        res.redirect("ventas");
      }
    }
<<<<<<< HEAD
    else{
        console.log("eliminado")
        res.redirect('ventas')
      }})

}

//GENERAR FACTURA
controlador.facturapedido = async (req, res) =>{
  const doc = new PDF();

  doc.text('Hola mundo, estoy realizando una pruba para los pdf', 30, 30);

  doc.pipe(fs.createReadStream('ejemplo.pdf'));

  doc.end();
}
//FIN FACTURA


//ENTRADA
//INSERTAR ENTRADA - PRODCUTO
controlador.inserentra = (req, res, next) => {
  const co = req.body.cod;
  const ca = req.body.can;
  const va = req.body.val;
  const val = req.body.vals;
  console.log(co, ca, va, val);
=======
  );
};
//ENTRADA
//INSERTAR ENTRADA - PRODCUTO
controlador.insertent = (req, res, next) => {
  const c = req.body.cod;
  const ca = req.body.can;
  const va = req.body.val;
  const sa = req.body.vals;
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd

  conexion.query(
    "INSERT INTO entrada SET ?",
    {
<<<<<<< HEAD
      codigo_p: co,
      cantidad_entr: ca,
      valor_llegada: va,
      valor_salida: val,
=======
      codigo_p: c,
      cantidad_entr: ca,
      valor_llegada: va,
      valor_salida: sa,
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd
    },
    (err) => {
      if (err) {
        next(new Error(err));
      } else {
        res.redirect("/entrada");
      }
    }
  );
};

// //CONSULTAR ENTRADA
controlador.entrada = async (req, res, next) => {
  conexion.query("SELECT * FROM entrada", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      res.render("entrada", { datos: resbd });
    }
  });
};


//ACTUALIZAR ENTRADA
controlador.actuent = async (req, res) => {
  const co = req.body.cc;
  const ca = req.body.dd;
  const va = req.body.va;
  const sa = req.body.vls;

  conexion.query(
    'UPDATE entrada SET codigo_p="' +
      co +
      '",cantidad_entr="' +
      ca +
      '", valor_llegada="' +
      va +
      '", valor_salida="' +
      sa +
      '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar entrada");
        throw err;
      } else {
        res.redirect("entrada");
      }
    }
  );
};

//BORRAR ENTRADDA?
controlador.borrarent = (req, res, next) => {
  const co = req.body.dd;
  conexion.query(
    'DELETE FROM entraada WHERE codigo_p="' + co + '"',
    async (err, respbb) => {
      if (err) {
        next(new Error(err));
      } else {
        console.log("eliminado");
        res.redirect("entrada");
      }
    }
  );
};
module.exports = controlador;
<<<<<<< HEAD

=======
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd
