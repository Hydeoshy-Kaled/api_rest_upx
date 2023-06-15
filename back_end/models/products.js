const Sequelize = require('sequelize')
const database = require('../config/database');

const Produto = database.define('doacoes',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    valor: {
        type: Sequelize.DOUBLE
    },
    instituicao:{
        type: Sequelize.STRING
    }
    })
 
module.exports = Produto;
