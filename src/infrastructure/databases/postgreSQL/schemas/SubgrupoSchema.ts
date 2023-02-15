/* eslint-disable camelcase */
import { DataTypes } from 'sequelize'
import { db } from '../postgreSQL'
import { GrupoModel } from './GrupoSchema';


export const SubgrupoModel = db.define('subgrupo', {
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
  nome: {
    type: DataTypes.STRING,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  pix: {
    type: DataTypes.STRING,
  },
  codigo_de_barra: {
    type: DataTypes.STRING,
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

SubgrupoModel.belongsTo(GrupoModel,{
  foreignKey: 'id_grupo'
})

GrupoModel.hasMany(SubgrupoModel,{
  foreignKey: 'id_grupo'
})