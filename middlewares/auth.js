'use strict'

//const jwt = require('jwt-simple')

//const moment = require('moment')

//const config = require('../config')

const service = require('../services')


function isAuth(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'You do not have authorization!'})
    } 

    const token = req.headers.authorization.split(' ')[1]
    
   // const payload = jwt.decode(token, config.SECRET_TOKEN)

   /* if(payload.exp <= moment().unix()){
        return res.status(401).send({message: 'The token has expired!'})
    }

    req.user = payload.sub
    next()*/
    service.decodeToken(token)
        .then(response=>{
            req.user = response
            next()
        })
        .catch(response=>{
            res.status(response.status)
        })
}

module.exports = isAuth