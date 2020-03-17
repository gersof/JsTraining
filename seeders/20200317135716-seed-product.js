'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      
    */
   return queryInterface.bulkInsert('Products', [{
    description: 'Jabon Rey',
    price: 1000,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    description: 'Antibacterial',
    price: 30000,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    description: 'Papel higienico',
    price: 80000,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {});
},
  
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
