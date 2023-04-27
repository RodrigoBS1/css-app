/*'use strict';

@type {import('sequelize-cli').Migration}
module.exports = {
  async up (queryInterface, Sequelize) {
  
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     
  },

  async down (queryInterface, Sequelize) {
   
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    
  }
};*/

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderBaskets', {
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      basket_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Baskets',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderBaskets');
  },
};
