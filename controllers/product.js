'use strict'

const Product = require('../models/product')

function getProducts(req,res){
    //res.status(200).send({products: []})
    Product.find({}, (err,products)=>{
        if(err) return res.status(500).send({message: `ERROR when performing the query: ${err}`})
        if(!products) return res.status(404).send({message: 'Products not founded!'})

        res.status(200).send({products: products})
    })
}
function getProduct(req,res){
    let productId = req.params.productId

    Product.findById(productId, (err,product)=>{
        if(err) return res.status(500).send({message: `ERROR when performing the query: ${err}`})
        if(!product) return res.status(404).send({message: 'Product not founded!'})

        res.status(200).send({product: product})
    })
}
function saveProduct(req,res){
     //console.log(req.body)
    //res.status(200).send({message: 'Product saved successfully!'})

    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.price = req.body.price
    product.category = req.body.category
    product.picture = req.body.picture
    product.description = req.body.description

    product.save((err, productStored)=>{
        if(err) return res.status(500).send({
            message: `ERROR when trying to save the product: ${err}`
        })
        res.status(200).send({
            product: productStored
        })
    })
}
function updateProduct(req,res){
    let productId = req.params.productId
    let productsToUpdate = req.body
    Product.findByIdAndUpdate(productId, productsToUpdate, (err,productUpdated)=>{
        if(err) return res.status(500).send({message: `ERROR when trying to update the product: ${err}`})
        res.status(200).send({product: productUpdated})
    })
}
function deleteProduct(req,res){
    let productId = req.params.productId

    Product.findById(productId, (err,product)=>{
        if(err) return res.status(500).send({message: `ERROR when trying to delete the product: ${err}`})

        product.remove(err=>{
            if(err) return res.status(500).send({message: `ERROR when trying to delete the product: ${err}`})

            res.status(200).send({message: 'Product deleted successfully!'})
        })
    })
}

module.exports = {
    
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct,
    
}