const express = require('express')
const routes = express.Router()

const homeController = require('../app/constrollers/homeController')

const products = require('./products')
const users = require('./users')

routes.get('/',homeController.index)

routes.use('/products',products)
routes.use('/users', users)

//ALIAS = ATALHO
routes.get('/ads/create',function(req,res){
    return res.redirect("/products/create")
})

routes.get('/accounts',function(req,res){
    return res.redirect("/users/login")
})

module.exports = routes