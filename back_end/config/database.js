const Sequelize = require('sequelize');
const sequelize = new Sequelize('upx_af', 'root', 'eichamylife2014', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
 
    });

    async function connect() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    
    connect()
module.exports = sequelize;