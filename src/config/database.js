const Sequelize = require('sequelize')

const sequelize = new Sequelize('crud', 'user', 'password', {
  host: './dev.sqlite',
  dialect:'sqlite'
})

module.exports= sequelize