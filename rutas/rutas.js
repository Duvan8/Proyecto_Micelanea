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
//RUTA PARA VENTAS-FACTURACION :c
router.get('/ventas', controlador.ventas);
router.post('/ventas', controlador.ventas);
router.post('/ventas', controlador.ventas);
router.post('/actufac', controlador.actufac);
router.post('/actufac', controlador.borrarfac);

router.get('/inventario',(req, res) => {
    res.render('inventario');
});

router.get('/proveedores', controlador.proveedores);
router.post('/proveedor', controlador.proveedor);

router.get('/administrador', controlador.administrador);
router.post('/inserusu', controlador.inserusu);
router.post('/administrador', controlador.administrador);

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

router.get('/devolucion',(req, res) => {
    res.render('devolucion');
});


module.exports = router;