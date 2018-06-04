'use strict'

const express = require('express')

const bodyParser = require('body-parser')

const hbs = require('express-handlebars')

const app = express()

const api = require('./routes')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs',
}))

app.set('view engine', '.hbs')

/*app.get('/hola/:name', (req,res)=>{
    res.send({message: `HELLO ${req.params.name}`})
})*/
//FIXME: Adding new route to our API
app.use('/api', api)

app.get('/login', (req,res)=>{
    res.render('login')
})

app.get('/', (req,res)=>{
    res.render('products')
})

module.exports = app
