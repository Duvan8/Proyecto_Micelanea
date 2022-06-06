const express =  require ('express');
const conexion = require ('../conexion/conexion');
const controlador = require ('../controlador/controlador');
const router = express.Router();

router.get('/', controlador.index);

router.post('/login',controlador.login);

router.get('/interfaz',(req, res) => {
    res.render('interfaz');
});
router.get('/productos',(req, res) => {
    res.render('productos');
});
<<<<<<< HEAD
=======
//RUTA PARA VENTAS-FACTURACION :c
router.get('/ventas', controlador.ventas);
router.get('/prubfact', controlador.prubfact);
//router.post('/prubfact', controlador.prubfact);
router.post('/factura', controlador.prubfact);
router.post('/ventas', controlador.ventas);
router.post('/ventas', controlador.ventas);
router.post('/actufac', controlador.actufac);
router.post('/actufac', controlador.borrarfac);
//CIERRE VENTAS

>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd
router.get('/inventario',(req, res) => {
    res.render('inventario');
});
router.get('/tiempo',(req, res) => {
    res.render('tiempo');
});
router.get('/nomina',(req, res) => {
    res.render('nomina');
});
router.get('/devolucion',(req, res) => {
    res.render('devolucion');
});
router.get('/ganancias',(req, res) => {
    res.render('ganancias');
});
// router.get('/entrada',(req, res) => {
//     res.render('entrada');
// });

//RUTA PARA VENTAS-FACTURACION :c
router.get('/ventas', controlador.ventas); //Esta me trae datos
router.post('/ventas', controlador.ventas)
router.post('/factura', controlador.factura);
router.post('/actufac', controlador.actufac);
router.post('/borrarfac', controlador.borrarfac);
//CIERRA RUTAS VENTAS

//FACTURA
router.get('/get-factura-ventas/:id', controlador.facturapedido);
//FACTURA

//RUTA PARA ENTRADA-PRODUCTOS
router.get('/entrada', controlador.entrada);
router.post('/entrada', controlador.inserentra);
router.post('/entrada', controlador.actuent);
router.post('/entrada', controlador.borrarent);
//CIERRE RUTAS ENTRADA

//RUTAS DE PROVEEDORES
router.get('/proveedores', controlador.proveedores);
router.post('/proveedores', controlador.proveedores);
router.post('/proveedor', controlador.proveedor);
router.post('/actuprov', controlador.actuprov);
router.post('/eliprov', controlador.eliprov);
//CIERRA RUTAS PROVEEDORES

<<<<<<< HEAD
//RUTAS DE DEVOLUCION
=======
//RUTAS DEVOLUCIONES
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd
router.get('/devolucion', controlador.devolucion);
router.post('/inserdev', controlador.inserdev);
router.post('/devolucion', controlador.devolucion);
router.post('/actudev', controlador.actudev);
router.post('/elidev', controlador.elidev);
<<<<<<< HEAD
//CIERRA RUTAS DEVOLUCION
=======
//CIERRE DEVOLUCIONES
>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd

//RUTAS USUARIOS
router.get('/administrador', controlador.administrador);
router.post('/inserusu', controlador.inserusu);
router.post('/administrador', controlador.administrador);
router.post('/actuadmin', controlador.actuadmin);
router.post('/eliusu', controlador.eliusu);
// CIERRA RUTAS DE USUARIOS

<<<<<<< HEAD
=======
router.get('/tiempo',(req, res) => {
    res.render('tiempo');
});
router.get('/nomina',(req, res) => {
    res.render('nomina');
});

//RUTAS PARA ENTRADA - PRODCUTOS :c
router.get('/entrada', controlador.entrada);
router.post('/entrada', controlador.insertent);
router.post('/entrada', controlador.entrada);
router.post('/entrada', controlador.actuent);
router.post('/entrada', controlador.borrarent);
//CIERRE ENTRADA
router.get('/devolucion',(req, res) => {
    res.render('devolucion');
});

router.get('/entrada',(req, res) => {
    res.render('entrada');
});

>>>>>>> 7ec9bd9b7030cb3522e89399d2ac4fe9cb0ecdfd
module.exports = router;