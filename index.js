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

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

app.get('/index' , (req,res) => {
    res.render('humildad')
    const datos = res.body.humilde;
})
