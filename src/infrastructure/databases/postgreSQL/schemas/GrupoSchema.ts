/* eslint-disable camelcase */
import { DataTypes } from 'sequelize'
import { db } from '../postgreSQL'


export const GrupoModel = db.define('grupo', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true,
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
},
{ freezeTableName: true }
)