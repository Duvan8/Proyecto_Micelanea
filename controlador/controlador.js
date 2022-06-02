const conexion = require('../conexion/conexion');
const {render}=require('ejs');
const bcryptjs=require('bcryptjs')
const controlador={};
//const cnn = connection();


controlador.index = (req, res, next) => {
  res.render("index");
};
controlador.proveedores = (req, res, next) => {
  res.render("proveedores");
};
controlador.administrador = (req, res, next) => {
  res.render("administrador");
};
controlador.ventas = (req, res, next) => {
  res.render("ventas");
};
controlador.entrada = (req, res, next) => {
  res.render("entrada");
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

controlador.administrador = async (req, res, next) => {
  conexion.query("SELECT * FROM usuarios", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      console.log(resbd);
      res.render("administrador", { datos: resbd });
    }
  });
};

controlador.login = async(req, res, next) => {
  const usu = await req.body.nom;
  const cla = await req.body.con;
  const pass = await req.body.cla;
  console.log(usu, cla);
  conexion.query('SELECT * FROM usuarios WHERE nom_usu=?', [usu], async(err, results) => {
      console.log(results);
      if (err) {
          next(new Error("Error de consulta login", err));
      }
      //nos sirve para encontrar solo al usuario
      if ((results != 0)) {
          console.log("primer if prueba", (results[0].contraseña));
          //este es para encontrar la contraseña
          if ((bcryptjs.compare(cla, results[0].contraseña))) {
              console.log("datos correctos segundo");
              //res.redirect('consultas');
              let rol = results[0].rol;
              //req.session.login = true; //se genera la variable de sesion
              console.log(rol);
              rol = results[0].rol;
              switch (rol) {
                  case 'administrador':
                      res.redirect('interfaz');
                      break;
                  case 'empleado':
                      res.redirect('interfaz');
                      break;
              }
          } else {
              console.log("datos incorrectos segundo else");
              res.redirect('/');
          }
      } else {
          console.log("datos incorrectos");
          res.redirect('/')
      }
  });
};
//En este estoy trabajando
//FACTURACION - VENTAS
// INSERTAR FACTURA
controlador.ventas=(req ,res, next) => {
  console.log("Jola pasa lfo?")
    const c=req.body.co;
    const d=req.body.do;
    const co=req.body.cod;
    const fe=req.body.fe;
    const ca=req.body.ca;
    const va=req.body.va;
    console.log(c,d,co,fe,ca,va);

    conexion.query("INSERT INTO facturacion SET ?",{
      codigo_p:c,doc_usu:d,codigo_fac:co,fecha_fac:fe,cantidad_fac:ca,valor_fac:va
    }, 
    (err)=>{
        if(err){
            next(new Error(err));
        }
        else{
            res.redirect('/ventas');
        }
    })
}

// CONSULTAR FACTURA
controlador.ventas = async (req, res, next) => {
  conexion.query("SELECT * FROM facturacion", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      console.log(resbd);
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

  console.log("datos para consulta" + co + doc + cod + fe + can + val);

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

//BORRAR FACTURA
controlador.borrarfac=(req,res,next)=>{
  const cod=req.body.dd;
  conexion.query('DELETE FROM facturacion WHERE codigo_fac="'+cod+'"', async(err,respbb)=>{
    if(err){
        next(new Error(err));
    }
    else{
        console.log("eliminado")
        res.redirect('ventas')
      }})

}



//ENTRADA
//INSERTAR ENTRADA - PRODCUTO
controlador.insertent=(req ,res, next) => {
    const c=req.body.cod;
    const ca=req.body.can;
    const va=req.body.val;
    const sa=req.body.vals;
    console.log(c,ca,va,sa);

    conexion.query("INSERT INTO entrada SET ?",{
      codigo_p:c,cantidad_entr:ca,
      valor_llegada:va,valor_salida:sa
    }, 
    (err)=>{
        if(err){
            next(new Error(err));
        }
        else{
            res.redirect('/entrada');
        }
    })
}

//CONSULTAR ENTRADA
controlador.entrada = async (req, res, next) => {
  conexion.query("SELECT * FROM entrada", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      console.log(resbd);
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

  console.log("datos para consulta" + co + ca + va + lo);

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
controlador.borrarent=(req,res,next)=>{
  const co=req.body.dd;
  conexion.query('DELETE FROM entraada WHERE codigo_p="'+co+'"', async(err,respbb)=>{
    if(err){
        next(new Error(err));
    }
    else{
        console.log("eliminado")
        res.redirect('entrada')
      }})

}
module.exports = controlador;