/* eslint-disable camelcase */
import { DataTypes } from 'sequelize'
import { db } from '../postgreSQL'
import { SubgrupoModel } from './SubgrupoSchema';


export const SaidaModel = db.define('saida', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_pagamento: {
    type: DataTypes.STRING,
  },
  data_vencimento: {
    type: DataTypes.STRING,
  },
  multa: {
    type: DataTypes.NUMBER,
  },
  juros: {
    type: DataTypes.NUMBER,
  },
  desconto: {
    type: DataTypes.NUMBER,
  },
  valor: {
    type: DataTypes.NUMBER,
  },
  id_subgrupo: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'subgrupo',
      key: 'id'
    }
  },
  id_grupo: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'grupo',
      key: 'id'
    }
  },
},
{ freezeTableName: true }
)

SaidaModel.belongsTo(SubgrupoModel,{
  foreignKey: 'id_subgrupo'
})

SubgrupoModel.hasMany(SaidaModel,{
  foreignKey: 'id_subgrupo'
})