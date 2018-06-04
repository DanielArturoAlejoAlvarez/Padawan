'use strict'

const express = require('express')

const productCtrl = require('../controllers/product')

const userCtrl = require('../controllers/user')

const auth = require('../middlewares/auth')

const api = express.Router()

//FIXME: Configure routes to API REST
api.get('/product',productCtrl.getProducts)

api.get('/product/:productId',productCtrl.getProduct)

api.post('/product', auth, productCtrl.saveProduct)

api.put('/product/:productId', auth, productCtrl.updateProduct)

api.delete('/product/:productId', auth, productCtrl.deleteProduct)

api.post('/signup', userCtrl.signUp)

api.post('/signin', userCtrl.signIn)

api.get('/private', auth, (req,res)=>{
    res.status(200).send({message: 'You have access!'})
})

module.exports = api