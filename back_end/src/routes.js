const  database = require('../config/database');
const  Produto = require('../models/products');

const express = require("express");

const routes = express.Router();


    routes.get('/', async (req, res) => {
        try {
           const doacoes = await Produto.findAll();
            return res.json(doacoes);

        } catch (error) {
            console.log(error);
        }
    })

    routes.post('/', async (req, res) => {

        const { nome, sobrenome, email, valor,instituicao } = req.body;

        try {
            const resultado = await database.sync();
            console.log(resultado);

            const resultadoCreate = await Produto.create({
                nome,
                sobrenome,
                email,
                valor,
                instituicao
            })

            console.log(resultadoCreate)
            return res.json(resultadoCreate)

        } catch (error) {
            console.log(error);
        }
    })

    
module.exports = routes;

