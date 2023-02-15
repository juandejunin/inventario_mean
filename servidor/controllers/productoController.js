const Producto = require("../models/Producto")

exports.crearProducto = async (req, res) => {
    try {
        let producto
        //creando el producto
        producto = new Producto(req.body)

        await producto.save()
        res.send(producto)


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obrtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find()
        res.json(productos)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }

}

exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body
        let producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({ msg: "no se encontro el producto solicitado" })
        }

        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion = ubicacion
        producto.precio = precio

        console.log(producto)

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto)
        console.log(producto)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')

    }

}