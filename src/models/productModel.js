const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/database')

class Product extends Model {}

Product.init({
 
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
 
  sequelize, 
  modelName: 'Product' 
});

module.exports = Product