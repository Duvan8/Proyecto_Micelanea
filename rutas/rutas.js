const express =  require ('express');
const conexion = require ('../conexion/conexion');
const controlador = require ('../controlador/controlador');
const router = express.Router();

router.get('/', controlador.index);

router.post('/login',controlador.login);

router.get('/interfaz',(req, res) => {
    res.render('interfaz');
});

router.get('/inventario',(req, res) => {
    res.render('inventario');
});
router.get('/devolucion',(req, res) => {
    res.render('devolucion');
});
router.get('/ganancias',(req, res) => {
    res.render('ganancias');
});
router.get('/entrada',(req, res) => {
    res.render('entrada');
});


//FACTURA
router.get('/get-factura-ventas/:id', controlador.facturapedido);
//FACTURA

//RUTA PARA VENTAS-FACTURACION :c
router.get('/ventas', controlador.ventas);
router.get('/prubfact', controlador.prubfact);
router.post('/factura', controlador.factura)
router.post('/actualizarfac', controlador.actualizarfac)
router.post('/prubfact', controlador.prubfact);
router.post('/eliminarfac', controlador.eliminarfac);
router.post('/ventas', controlador.ventas)
//CIERRE VENTAS

//RUTA PARA ENTRADA-PRODUCTOS
router.get('/entrada', controlador.entrada);
router.post('/insentrada', controlador.insentrada);
router.post('/entrada', controlador.entrada);
router.post('/actentrada', controlador.actentrada);
router.post('/eliminarent', controlador.eliminarent);
//CIERRE RUTAS ENTRADA

//RUTAS DE PROVEEDORES
router.get('/proveedores', controlador.proveedores);
router.post('/proveedores', controlador.proveedores);
router.post('/proveedor', controlador.proveedor);
router.post('/actuprov', controlador.actuprov);
router.post('/eliprov', controlador.eliprov);
//CIERRA RUTAS PROVEEDORES


router.get('/devolucion', controlador.devolucion);
router.post('/inserdev', controlador.inserdev);
router.post('/devolucion', controlador.devolucion);
router.post('/actudev', controlador.actudev);
router.post('/elidev', controlador.elidev);


//RUTAS USUARIOS
router.get('/administrador', controlador.administrador);
router.post('/inserusu', controlador.inserusu);
router.post('/administrador', controlador.administrador);
router.post('/actuadmin', controlador.actuadmin);
router.post('/eliusu', controlador.eliusu);
// CIERRA RUTAS DE USUARIOS


router.get('/devolucion',(req, res) => {
    res.render('devolucion');
});

<<<<<<< HEAD
//TIEMPO
router.get('/tiempo',(req, res) => {
    res.render('tiempo');
});
=======
router.get('/entrada',(req, res) => {
    res.render('entrada');
});

>>>>>>> f54d32440e79b15a16c5e78bb969c48a23796408

//BRAYAN
//TIEMPO CRUD COMPLETO
router.get('/tiempo', controlador.tiempo);
router.post('/insertartiempo', controlador.insertartiempo);
router.post('/tiempo', controlador.tiempo);
router.post('/actutiempo', controlador.actutiempo);
router.post('/elitiempo', controlador.elitiempo);

//NOMINA CRUD COMPLETO
router.get('/nomina', controlador.nomina);
router.post('/insernomina', controlador.innomina);
router.post('/nomina', controlador.nomina);
router.post('/actunomina', controlador.actunomina);
router.post('/elinomina', controlador.elinomina);

//PRODUCTOS CRUD COMPLETO
router.get('/productos', controlador.productos);
router.post('/inserproducto', controlador.insproducto);
router.post('/productos', controlador.productos);
router.post('/actuproductos', controlador.actuproductos);
router.post('/eliproductos', controlador.eliproductos);

module.exports = router;