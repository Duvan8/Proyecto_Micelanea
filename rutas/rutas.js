const express = require("express");
const conexion = require("../conexion/conexion");
const controlador = require("../controlador/controlador");
const router = express.Router();

router.get("/", controlador.index);

router.post("/login", controlador.login);

router.get("/interfaz", (req, res) => {
  res.render("interfaz");
});

router.get("/interfaz2", (req, res) => {
  res.render("interfaz2");
});

//duvan
router.get("/prubfact", controlador.prubfact);
router.get("/valor", controlador.valor);
router.post("/detalle", controlador.detalle);
//router.post("/detalle", controlador.detalle);
//router.post("/pdf", controlador.detalle);
router.post("/prubfact", controlador.prubfact);
router.post("/valor", controlador.valor);
router.post("/nuevaventa", controlador.nuevaventa);
router.post("/carrito", controlador.carrito);
router.post("/delcarrito", controlador.delcarrito);
router.post("/pagar", controlador.pagar);


//RUTA PARA VENTAS-FACTURACION :c
router.get("/ventas", controlador.ventas); //Esta me trae datos
router.post("/ventas", controlador.ventas);
router.post("/factura", controlador.factura);

//CIERRA RUTAS VENTAS

//FACTURA
router.get("/pdf", controlador.pdfacturas);
router.get("/factura", controlador.pdfacturas);
//FACTURA

//RUTA PARA VENTAS-FACTURACION :c
router.post("/factura", controlador.factura);
router.post("/eliminarfac", controlador.eliminarfac);
//CIERRE VENTAS

//RUTA PARA ENTRADA-PRODUCTOS

router.get("/entrada", controlador.entrada);
router.post("/insentrada", controlador.insentrada);
router.post("/entrada", controlador.entrada);
router.post("/actentrada", controlador.actentrada);
router.post("/eliminarent", controlador.eliminarent);
router.post("/entra", controlador.entra);

//CIERRE RUTAS ENTRADA

//RUTAS DE PROVEEDORES
router.get("/proveedores", controlador.proveedores);
router.post("/proveedores", controlador.proveedores);
router.post("/proveedor", controlador.proveedor);
router.post("/actuprov", controlador.actuprov);
router.post("/eliprov", controlador.eliprov);
//CIERRA RUTAS PROVEEDORES

router.get("/devolucion", controlador.devolucion);
router.post("/inserdev", controlador.inserdev);
router.post("/devolucion", controlador.devolucion);
router.post("/actudev", controlador.actudev);
router.post("/elidev", controlador.elidev);

//RUTAS USUARIOS
router.get("/administrador", controlador.administrador);
router.post("/inserusu", controlador.inserusu);
router.post("/administrador", controlador.administrador);
router.post("/actuadmin", controlador.actuadmin);
router.post("/eliusu", controlador.eliusu);
// CIERRA RUTAS DE USUARIOS


//TIEMPO

router.get("/tiempo", controlador.tiempo);
router.post("/insertartiempo", controlador.insertartiempo);
router.post("/tiempo", controlador.tiempo);

//NOMINA

router.post("/nomina", controlador.consultarnomina);

//PRODUCTOS

router.post("/productos", controlador.cproductos);

//BRAYAN
//TIEMPO CRUD COMPLETO
router.get("/tiempo", controlador.tiempo);
router.post("/insertartiempo", controlador.insertartiempo);
router.post("/tiempo", controlador.tiempo);
router.post("/actutiempo", controlador.actutiempo);
router.post("/elitiempo", controlador.elitiempo);

//NOMINA CRUD COMPLETO
router.get("/nomina", controlador.nomina);
router.post("/insernomina", controlador.innomina);
router.post("/nomina", controlador.nomina);
router.post("/actunomina", controlador.actunomina);
router.post("/elinomina", controlador.elinomina);

//PRODUCTOS CRUD COMPLETO
router.get("/productos", controlador.productos);
router.post("/inserproducto", controlador.insproducto);
router.post("/actuproductos", controlador.actuproductos);
router.post("/eliproductos", controlador.eliproductos);

router.get("/ganancias", controlador.ganancias);
router.post("/ganancias", controlador.ganancias);

router.get("/inventario", controlador.inventario);
router.post("/inventario", controlador.inventario);
module.exports = router;
