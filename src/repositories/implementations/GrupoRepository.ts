/* eslint-disable no-throw-literal */
import { IGrupoRepository, IParams } from './../interfaces/IGrupoRepository';
import { Grupo } from './../../entities/Grupo';
import { GrupoModel } from '../../infrastructure/databases/postgreSQL/schemas/GrupoSchema';
import { Op } from 'sequelize';

class GrupoRepository implements IGrupoRepository {
  async update(grupo: Grupo, id: string) {
    try {
       return await GrupoModel.update(grupo, {where: {id:id}})
    } catch (error) {
      throw{
        status: error.status || 422,
        message: `Houve um problema ao buscar os dados ${error.message || error}`
      } 
    }
  }

  async findById(id: string) {
    try {
      return await GrupoModel.findOne({ where: {id:id}})
     } catch (error) {
       throw {
         status: error.status || 422,
         message: `Houve um problema ao buscar os dados ${error.message || error}`
       }
     }
  }

  async findAll(params: IParams, limitador: number, pagination: number): Promise<Grupo[]> {
    try {
      const {
        filter: where = { }, page = 1, limit, sort
      } = params;

      if (where.search) {
        where[Op.or] = [{
          nome: { [Op.iLike]: `%${where.search}%` },
        }];
      }

      
      delete where.search;
      const result = await GrupoModel.findAll({ where: {...where, ativo: true},
        limit: limitador,
        offset: (pagination - 1) * (limitador || 0),
        order: sort ? JSON.parse(sort) : [['createdAt', 'DESC']],
      });

      const grupo = JSON.parse(JSON.stringify(result));

      const grupos =  grupo.map(grupo => { 
        return new Grupo(grupo, grupo.id)
      });
        return grupos
    } catch (error: any) {
      throw new Error(`Erro ao buscar as notificações na base de dados: ${error.message}`);
    }
}

  async create(grupo: Grupo) {
    try {
      const { 
        id, 
        ativo, 
        createdAt, 
        updatedAt, 
        nome
      } = grupo
      return await GrupoModel.create({ 
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        nome
      })
   } catch (error) {
     throw{
      status: error.status || 422,
      message: `${error.message || error}`
     } 
   }
  }
  
  async delete(id: string) {
    try {
      return await GrupoModel.update({ativo:false}, {where: {id:id}})
   } catch (error) {
     throw{
      status: error.status || 422,
      message: `Houve um problema ao buscar os dados ${error.message || error}`
     } 
   }
  }

  async count(params: IParams): Promise<number> {
    try {
      const { filter: where = {} } = params;

      if (where.search) {
        where[Op.or] = [{
          nome: { [Op.iLike]: `%${where.search}%` },
        }];
      }

      delete where.search;

      const aqui = await GrupoModel.count({ where: {ativo: true} });
      return aqui
    } catch (error: any) {
      throw new Error(`Erro ao contar as notificações na base de dados: ${error.message}`);
    }
  }
}

export { GrupoRepository }