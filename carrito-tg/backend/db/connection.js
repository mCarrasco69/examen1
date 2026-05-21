const {Sequelize} = require('sequelize')
require('dotenv').config()

const sequelize= new Sequelize(
     process.env.DB_NAME,
     process.env.DB_USER,
     process.env.DB_PASSWORD,
    {
        host:  process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
)


sequelize.authenticate()
    .then(()=> console.log("Conexion se realizo exitosamente"))
    .catch(err=> console.log("Ocurrio un error con la conexion" + err))

module.exports= sequelize