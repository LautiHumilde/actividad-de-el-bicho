const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const port = 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser');
const { get, Server } = require('http');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const mongoDBURL = 'mongodb://localhost:3000/nombre_basedatos';

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

app.get('/index' , (req,res) => {
    res.render('humildad')
})

app.post('/index' , (req,res) => {
    const nombre = req.body.Nombre;
    const segundo_nombre = req.body.Segundo_Nombre;
    const apellido = req.body.Apellido;
    const edad = req.body.Edad;
    const datos = [nombre,segundo_nombre,apellido,edad]
    console.log(datos);
}) 

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
});