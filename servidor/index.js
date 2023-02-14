const express = require('express')
const conectarDB = require('./config/db')

//Creando el servidor
const app = express();

//Conectamos a la base de datos
conectarDB()

//Definimos rutas
app.get('/', (req,res) =>{
    res.send('Holisssss')
})

app.listen(4000, ()=>{
    console.log('el servidor esta corriendo en el puerto 4000')
})