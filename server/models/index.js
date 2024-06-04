const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauce", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Item = sequelize.define("Item", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
  Item,
};
