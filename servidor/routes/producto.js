//Rutas para producto
const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')

//api productos
router.post('/', productoController.crearProducto)
    .get('/', productoController.obrtenerProductos)
router.patch('/:id', productoController.actualizarProducto)


module.exports = router