//Rutas para producto
const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')

//api productos
router.post('/', productoController.crearProducto)
    .get('/', productoController.obrtenerProductos)
router.patch('/:id', productoController.actualizarProducto)
router.get('/:id', productoController.obtenerProducto)
router.delete('/:id', productoController.eliminarProducto)



module.exports = router