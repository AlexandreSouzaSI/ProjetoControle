/* eslint-disable camelcase */
import { DataTypes } from 'sequelize'
import { db } from '../postgreSQL'
import { SubgrupoModel } from './SubgrupoSchema';


export const EntradaModel = db.define('entrada', {
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
  data: {
    type: DataTypes.STRING,
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

EntradaModel.belongsTo(SubgrupoModel,{
  foreignKey: 'id_subgrupo'
})

SubgrupoModel.hasMany(EntradaModel,{
  foreignKey: 'id_subgrupo'
})