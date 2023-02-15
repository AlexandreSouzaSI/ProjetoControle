'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subgrupo', {
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
      },
      tipo: {
        type: Sequelize.STRING
      },
      pix: {
        type: Sequelize.STRING
      },
      codigo_de_barra: {
        type: Sequelize.STRING
      },
      id_grupo: {
        type: Sequelize.STRING
      },
    },
    { freezeTableName: true }
  )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('subgrupo')
  }
};








