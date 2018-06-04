'use strict'

const mongoose = require('mongoose')

const app = require('./app')

const config = require('./config')

mongoose.connect(config.db, (err,res)=>{
    //if(err) throw err
    if(err){
        return console.log(`Error when trying to connect with the BD: ${err}`)
    }
    console.log('Connection established to the DB')

    app.listen(config.port, ()=>{
        console.log(`Server run in: http://127.0.0.1:${config.port}`)
    })
})


