const express = require('express')
const conectarDB = require('./config/db')
const cors = require ('cors')

//Creando el servidor
const app = express();

//Conectamos a la base de datos
conectarDB()

app.use(cors())

app.use(express.json())

//Definimos rutas

app.use('/api/productos', require('./routes/producto'))


app.listen(4000, ()=>{
    console.log('el servidor esta corriendo en el puerto 4000')
})