const express =  require ('express');
const conexion = require ('../conexion/conexion');
const controlador = require ('../controlador/controlador');
const router = express.Router();

router.get('/', controlador.index);

router.get('/interfaz',(req, res) => {
    res.render('interfaz');
});
router.get('/productos',(req, res) => {
    res.render('productos');
});
router.get('/ventas',(req, res) => {
    res.render('ventas');
});
router.get('/inventario',(req, res) => {
    res.render('inventario');
});

router.get('/proveedores', controlador.proveedores);
router.post('/proveedor', controlador.proveedor);

router.get('/administrador', controlador.administrador);
router.post('/inserusu', controlador.inserusu);

router.get('/tiempo',(req, res) => {
    res.render('tiempo');
});
router.get('/nomina',(req, res) => {
    res.render('nomina');
});
router.get('/entrada',(req, res) => {
    res.render('entrada');
});
router.get('/devolucion',(req, res) => {
    res.render('devolucion');
});


module.exports = router;