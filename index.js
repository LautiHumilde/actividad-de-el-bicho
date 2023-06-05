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
const { MongoClient } = require('mongodb');
const url =  'mongodb+srv://tomi:<password>@oc.sdndqtb.mongodb.net/?retryWrites=true&w=majority';

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

MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
}

console.log('Conexión exitosa a la base de datos');