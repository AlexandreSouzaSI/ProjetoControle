'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('grupo', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      nome: {
        type: Sequelize.STRING
      }
    },
    { freezeTableName: true }
  )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('grupo')
  }
};








