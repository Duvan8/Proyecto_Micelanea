const express =  require ('express');
const conexion = require ('../conexion/conexion');
const controlador = require ('../controlador/controlador')
const router = express.Router();

router.get('/',(req, res) => {
    res.render('index');
});
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
router.get('/proveedores',(req, res) => {
    res.render('proveedores');
});
router.get('/administrador',(req, res) => {
    res.render('administrador');
});
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