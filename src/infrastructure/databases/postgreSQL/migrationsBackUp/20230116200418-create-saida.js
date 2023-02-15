'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('saida', {
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
      data_pagamento: {
        type: Sequelize.STRING
      },
      data_vencimento: {
        type: Sequelize.STRING
      },
      multa: {
        type: Sequelize.DECIMAL
      },
      juros: {
        type: Sequelize.DECIMAL
      },
      desconto: {
        type: Sequelize.DECIMAL
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      id_subgrupo: {
        type: Sequelize.STRING
      },
      id_grupo: {
        type: Sequelize.STRING,
      },
    },
    { freezeTableName: true }
  )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('saida')
  }
};







