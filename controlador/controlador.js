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




//JULIAN
// INSERTAR FACTURA
controlador.factura = (req, res, next) => {
  const c = req.body.co;
  const d = req.body.do;
  const co = req.body.cod;
  const fe = req.body.fe;
  const ca = req.body.ca;
  const va = req.body.va;

  conexion.query(
    "INSERT INTO facturacion SET ?",
    {
      codigo_p: c,
      doc_usu: d,
      codigo_fac: co,
      fecha_fac: fe,
      cantidad_fac: ca,
      valor_fac: va,
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


//Duvan
controlador.prubfact = (req, res, next) => {
  res.render("prubfact");
};
//Duvan

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
controlador.actualizarfac = async (req, res, next) => {
  const codpf = req.body.dd;
  const docf = req.body.uu;
  const codff = req.body.aa;
  const fecf = req.body.cc;
  const canf = req.body.rr;
  const valf = req.body.vv;
  console.log(codpf, docf, codff, fecf, canf, valf);

  conexion.query('UPDATE facturacion SET doc_usu="' + docf +
    '",codigo_fac="' + codff +
    '", fecha_fac="' + fecf +
    '",cantidad_fac="' + canf +
    '", valor_fac="' + valf +
    '", WHERE codigo_p="' + codpf + '"',
    async (err) => {
      if (err) {
        console.log("Error en actualizar factura." + err)
        throw err;
      }
      else {
        console.log("Actualizado")
        res.redirect("/ventas")
      }
    });
}

//BORRAR FACTURA
controlador.eliminarfac = (req, res, next) => {
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
  )
}


//GENERAR FACTURA PDFS
controlador.facturapedido = async (req, res) => {
  const doc = new PDF();

  doc.text('Hola mundo, estoy realizando una pruba para los pdf', 30, 30);

  doc.pipe(fs.createReadStream('ejemplo.pdf'));

  doc.end();
}
//FIN FACTURA PDFS


//ENTRADA
//INSERTAR ENTRADA - PRODCUTO
controlador.insentrada = (req, res, next) => {
  const c = req.body.cod;
  const ca = req.body.can;
  const va = req.body.val;
  const sa = req.body.vals;

  conexion.query(
    "INSERT INTO entrada SET ?",
    {
      codigo_p: c,
      cantidad_entr: ca,
      valor_llegada: va,
      valor_salida: sa,
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


// //ACTUALIZAR ENTRADA
controlador.actentrada = async (req, res) => {
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
controlador.eliminarent = (req, res, next) => {
  const co = req.body.dd;
  conexion.query(
    'DELETE FROM entrada WHERE codigo_p="' + co + '"',
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


//BRAYAN
//Tiempo
//Insertar tiempo
controlador.insertartiempo = async (req, res, next) => {
  const doc_t = req.body.doc_t;
  const hr_en = req.body.hr_en;
  const hr_sa = req.body.hr_sa;
  const hr_tra = req.body.hr_tra;
  const hr_ex = req.body.hr_ex;
  const id_ti = req.body.id_ti;

conexion.query(
  "INSERT INTO tiempo SET ?",
  {
    doc_usu: doc_t,
    hora_entrada: hr_en,
    hora_salida: hr_sa,
    horas_trabajadas: hr_tra,
    horas_extras: hr_ex,
    id_tiempo: id_ti,
  },
  (err) => {
    if (err) {
      throw err;
      console.log("Error en insertar tiempo");
    } else {
      console.log("Se inserto en la tabla tiempo");
      res.redirect("/tiempo");
    }
  }
);
};

//Actualizar tiempo
controlador.actutiempo = async (req, res, next) => {
  const idtt = req.body.itt;
  const docu = req.body.dcc;
  const hoen = req.body.hee;
  const hosa = req.body.hss;
  const hotr = req.body.htt;
  const hoex = req.body.hxx;

  conexion.query(
    'UPDATE tiempo SET doc_usu="' +
    docu +
    '", hora_entrada="' +
    hoen +
    '", hora_salida="' +
    hosa +
    '", horas_trabajadas="' +
    hotr +
    '", horas_extras="' +
    hoex +
    '" WHERE id_tiempo="' +
    idtt +
    '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar tiempo");
        throw err;
      } else {
        console.log("actualizado");
        res.redirect("tiempo");
      }
    }
  );
};

//Consultar tiempo
controlador.tiempo = async (req, res, next) => {
  conexion.query("SELECT * FROM tiempo", (err, resbd) => {
    if (err) {
      next(new Error(err));
      console.log("Error en la consulta");
    } else {
      res.render("tiempo", { datos: resbd });
    }
  });
};

//Eliminar tiempo
controlador.elitiempo = async (req, res) => {
  const idt = req.body.ddt;
  conexion.query(
    'DELETE FROM tiempo WHERE id_tiempo="' + idt + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en tiempo");
        throw err;
      } else {
        console.log("tiempo eliminado");
        res.redirect("tiempo");
      }
    }
  );
};


//Nomina
controlador.innomina = async (req, res, next) => {
  const idn_n = req.body.idn_n;
  const doc_n = req.body.doc_n;
  const vhr_n = req.body.vhr_n;
  const vhre_n = req.body.vhre_n;
  const vhrn_n = req.body.vhrn_n;
  const vhrf_n = req.body.vhrf_n;
  const vbo_n = req.body.vbo_n;
  const pg_n = req.body.pg_n;
  const mes_n = req.body.mes_n;

conexion.query(
  "INSERT INTO nomina SET ?",
  {
    id_nomina: idn_n,
    doc_usu: doc_n,
    valor_hora: vhr_n,
    extra: vhre_n,
    nocturna: vhrn_n,
    festiva: vhrf_n,
    bonificacion: vbo_n,
    pago: pg_n,
    mes_pagado: mes_n,
  },
  (err) => {
    if (err) {
      throw err;
      console.log("Error en insertar nomina");
    } else {
      console.log("Se inserto en la tabla nomina");
      res.redirect("/nomina");
    }
  }
);
};

//Actualizar nomina
controlador.actunomina = async (req, res, next) => {
  const idttt = req.body.iii;
  const docuu = req.body.ddd;
  const hoenn = req.body.hhh;
  const hosaa = req.body.xxx;
  const hotrr = req.body.nnn;
  const hoexx = req.body.fff;
  const hossa = req.body.bbb;
  const hottr = req.body.ppp;
  const hoeex = req.body.mmm;

  conexion.query(
    'UPDATE nomina SET doc_usu="' +
    docuu +
    '", valor_hora="' +
    hoenn +
    '", extra="' +
    hosaa +
    '", nocturna="' +
    hotrr +
    '", festiva="' +
    hoexx +
    '", bonificacion="' +
    hossa +
    '", pago="' +
    hottr +
    '", mes_pagado="' +
    hoeex +
    '" WHERE id_nomina="' +
    idttt +
    '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar nomina");
        throw err;
      } else {
        console.log("actualizado");
        res.redirect("nomina");
      }
    }
  );
};

//Consultar nomina
controlador.nomina = async(req, res) => {
  conexion.query('SELECT * FROM nomina', (err, resbd) => {
      if (err) {
          next(new Error(err))
          console.log("Error en la consulta")
      } else {
          console.log(resbd)
          res.render('nomina', { datos: resbd });
      }
  });
};

//Eliminar Nomina
controlador.elinomina = async (req, res) => {
  const dnn = req.body.dn;
  conexion.query(
    'DELETE FROM nomina WHERE id_nomina="' + dnn + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en nomina");
        throw err;
      } else {
        console.log("nomina eliminado");
        res.redirect("nomina");
      }
    }
  );
};


//Productos
controlador.insproducto = async (req, res, next) => {
  const id_pro = req.body.id_pro;
  const cod_pro = req.body.cod_pro;
  const nom_pro = req.body.nom_pro;
  const can_pro = req.body.can_pro;
  const prc_pro = req.body.prc_pro;
  const iva_pro = req.body.iva_pro;

conexion.query(
  "INSERT INTO productos SET ?",
  {
    id_producto: id_pro,
    codigo_p: cod_pro,
    nombre_prod: nom_pro,
    cantidad_und_prod: can_pro,
    valor_prod: prc_pro,
    iva_prod: iva_pro,
  },
  (err) => {
    if (err) {
      throw err;
      console.log("Error en insertar producto");
    } else {
      console.log("Se inserto en la tabla produtos");
      res.redirect("/productos");
    }
  }
);
};

//Actualizar productos
controlador.actuproductos = async (req, res, next) => {
  const idttp = req.body.ddp;
  const docup = req.body.uup;
  const hoenp = req.body.aap;
  const hosap = req.body.ccp;
  const hotrp = req.body.rrp;
  const hoexp = req.body.ffp;

  conexion.query(
    'UPDATE productos SET codigo_p="' +
    docup +
    '", nombre_prod="' +
    hoenp +
    '", cantidad_und_prod="' +
    hosap +
    '", valor_prod="' +
    hotrp +
    '", iva_prod="' +
    hoexp +
    '" WHERE id_producto="' +
    idttp +
    '"',
    async (err) => {
      if (err) {
        console.log("error al actualizar producto");
        throw err;
      } else {
        console.log("actualizado");
        res.redirect("productos");
      }
    }
  );
};

//Consultar productos
controlador.productos = async(req, res, next) => {
  conexion.query('SELECT * FROM productos', (err, resbd) => {
      if (err) {
          next(new Error(err))
          console.log("Error en la consulta")
      } else {
          console.log(resbd)
          res.render('productos', { datos: resbd });
      }
  })
}

//Eliminar productos
controlador.eliproductos = async (req, res) => {
  const dft = req.body.dts;
  conexion.query(
    'DELETE FROM productos WHERE id_producto="' + dft + '"',
    async (err) => {
      if (err) {
        console.log("error al eliminar en productos");
        throw err;
      } else {
        console.log("producto eliminado");
        res.redirect("productos");
      }
    }
  );
};

module.exports = controlador;
module.exports = controlador;