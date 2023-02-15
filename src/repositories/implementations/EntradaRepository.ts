/* eslint-disable no-throw-literal */
import { IEntradaRepository, IParams } from './../interfaces/IEntradaRepository';
import { Entrada } from './../../entities/Entrada';
import { EntradaModel } from './../../infrastructure/databases/postgreSQL/schemas/EntradaSchema';
import { SubgrupoModel } from './../../infrastructure/databases/postgreSQL/schemas/SubgrupoSchema';
import { GrupoModel } from './../../infrastructure/databases/postgreSQL/schemas/GrupoSchema';
import { Op } from 'sequelize';

class EntradaRepository implements IEntradaRepository {

  async update(entrada: Entrada, id: string) {
    try {
       return await EntradaModel.update(entrada, {where: {id:id}})
    } catch (error) {
      throw{
        status: error.status || 422,
        message: `Houve um problema ao buscar os dados ${error.message || error}`
      } 
    }
  }

  async findById(id: string) {
    try {
      return await EntradaModel.findOne({ where: {id:id}, 
        include: [
          { model: SubgrupoModel, as: "subgrupo",
          include: [
            { model: GrupoModel, as: "grupo"}
          ]},
        ], 
      })
     } catch (error) {
       throw {
         status: error.status || 422,
         message: `Houve um problema ao buscar os dados ${error.message || error}`
       }
     }
  }

  async findAll(params: IParams, limitador: number, pagination: number): Promise<Entrada[]> {
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
      const result = await EntradaModel.findAll({ where:  { ativo: true},
      include: [
        { model: SubgrupoModel, as: "subgrupo", where,
        include: [
          { model: GrupoModel, as: "grupo" } 
        ]},
      ],
        limit: limitador,
        offset: (pagination - 1) * (limitador || 0),
        order: sort ? JSON.parse(sort) : [['createdAt', 'DESC']],
      });

      const entrada = JSON.parse(JSON.stringify(result));

      const entradas =  entrada.map(entrada => { 
        return new Entrada(entrada, entrada.id)
      });
        return entradas
    } catch (error: any) {
      throw new Error(`Erro ao buscar as notificações na base de dados: ${error.message}`);
    }
}

  async create(entrada: Entrada) {
    try {
      const { 
        id, 
        ativo,  
        createdAt, 
        updatedAt,
        data, 
        id_subgrupo, 
        valor,
        id_grupo
      } = entrada
      return await EntradaModel.create({ 
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        data, 
        id_subgrupo, 
        valor,
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
      return await EntradaModel.update({ativo:false}, {where: {id:id}})
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

      return await EntradaModel.count({
        include: [
          { model: SubgrupoModel, as: "subgrupo", where }
        ],
      })
    } catch (error: any) {
      throw new Error(`Erro ao contar as notificações na base de dados: ${error.message}`);
    }
  }

  async sum(id?: string) {
    console.log("id no repositorio : ",id)
    try {
      return await EntradaModel.sum('valor')
    } catch (error) {
      
    }
  }
}

export { EntradaRepository }
