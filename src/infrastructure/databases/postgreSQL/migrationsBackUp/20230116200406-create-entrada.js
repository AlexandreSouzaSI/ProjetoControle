'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('entrada', {
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
      data: {
        type: Sequelize.STRING
      },
      id_subgrupo: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      id_grupo: {
        type: Sequelize.STRING,
      },
    },
    { freezeTableName: true }
  )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('entrada')
  }
};







