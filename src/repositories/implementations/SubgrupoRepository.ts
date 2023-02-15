/* eslint-disable no-throw-literal */
import { ISubgrupoRepository, IParams } from './../interfaces/ISubgrupoRepository';
import { Subgrupo } from './../../entities/Subgrupo';
import { SubgrupoModel } from './../../infrastructure/databases/postgreSQL/schemas/SubgrupoSchema';
import { GrupoModel } from './../../infrastructure/databases/postgreSQL/schemas/GrupoSchema';
import { Op } from 'sequelize';

class SubgrupoRepository implements ISubgrupoRepository {
  async update(subgrupo: Subgrupo, id: string) {
    try {
       return await SubgrupoModel.update(subgrupo, {where: {id:id}})
    } catch (error) {
      throw{
        status: error.status || 422,
        message: `Houve um problema ao buscar os dados ${error.message || error}`
      } 
    }
  }

  async findById(id: string) {
    try {
      return await SubgrupoModel.findOne({ where: {id:id},
        include: [
          { model: GrupoModel, as: "grupo"},
        ], 
      })
     } catch (error) {
       throw {
         status: error.status || 422,
         message: `Houve um problema ao buscar os dados ${error.message || error}`
       }
     }
  }

  async findAll(params: IParams, limitador: number, pagination: number): Promise<Subgrupo[]> {
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
      const result = await SubgrupoModel.findAll({ where:  {...where, ativo: true},
        include: [
          { model: GrupoModel, as: "grupo" },
        ],
        limit: limitador,
        offset: (pagination - 1) * (limitador || 0),
        order: sort ? JSON.parse(sort) : [['createdAt', 'DESC']],
      });

      const subgrupo = JSON.parse(JSON.stringify(result));

      const subgrupos =  subgrupo.map(subgrupo => { 
        return new Subgrupo(subgrupo, subgrupo.id)
      });
        return subgrupos
    } catch (error: any) {
      throw new Error(`Erro ao buscar as notificações na base de dados: ${error.message}`);
    }
}

  async create(subgrupo: Subgrupo) {
    try {
      const { 
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        nome,
        tipo,
        pix,
        codigo_de_barra,
        id_grupo
      } = subgrupo
      return await SubgrupoModel.create({ 
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        nome,
        tipo,
        pix,
        codigo_de_barra,
        id_grupo
      })
   } catch (error) {
     throw{
      status: error.status || 422,
      message: `Houve um problema ao buscar os dados ${error.message || error}`
     } 
   }
  }
  
  async delete(id: string) {
    try {
      return await SubgrupoModel.update({ativo:false}, {where: {id:id}})
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

      return await SubgrupoModel.count({ where: {ativo:true} });
    } catch (error: any) {
      throw new Error(`Erro ao contar as notificações na base de dados: ${error.message}`);
    }
  }
}

export { SubgrupoRepository }