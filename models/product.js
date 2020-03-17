'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    description: DataTypes.STRING,
    price: DataTypes.NUMBER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};