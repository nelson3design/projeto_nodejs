const Sequelize = require('sequelize')

const sequelize = new Sequelize('crud', 'user', 'password', {
  host: './database.sqlite',
  dialect:'sqlite'
})

module.exports= sequelize