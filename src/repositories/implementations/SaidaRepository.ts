/* eslint-disable no-throw-literal */
import { ISaidaRepository, IParams } from './../interfaces/ISaidaRepository';
import { Saida } from './../../entities/Saida';
import { SaidaModel } from './../../infrastructure/databases/postgreSQL/schemas/SaidaSchema';
import { SubgrupoModel } from './../../infrastructure/databases/postgreSQL/schemas/SubgrupoSchema';
import { GrupoModel } from './../../infrastructure/databases/postgreSQL/schemas/GrupoSchema';
import { Op } from 'sequelize';

class SaidaRepository implements ISaidaRepository {
  async update(saida: Saida, id: string) {
    try {
       return await SaidaModel.update(saida, {where: {id:id}})
    } catch (error) {
      throw{
        status: error.status || 422,
        message: `Houve um problema ao buscar os dados ${error.message || error}`
      } 
    }
  }

  async findById(id: string) {
    try {
      return await SaidaModel.findOne({ where: {id:id},
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

  async findAll(params: IParams, limitador: number, pagination: number): Promise<Saida[]> {
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
      const result = await SaidaModel.findAll({ where:  { ativo: true},
        include: [
          { model: SubgrupoModel, as: "subgrupo", where,  
          include: [
            { model: GrupoModel, as: "grupo" } 
          ]},
        ],
        limit: limitador,
        offset: (pagination - 1) * (limitador || 0),
        order: sort ? JSON.parse(sort) : [['data_vencimento', 'ASC']], 
      });

      const saida = JSON.parse(JSON.stringify(result));

      const saidas =  saida.map(saida => { 
        return new Saida(saida, saida.id)
      });
        return saidas
    } catch (error: any) {
      throw new Error(`Erro ao buscar as notificações na base de dados: ${error.message}`);
    }
}

  async create(saida: Saida) {
    try {
      const { 
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        data_pagamento, 
        data_vencimento,
        multa,
        juros,
        desconto,
        id_subgrupo,
        valor,
        id_grupo
      } = saida
      return SaidaModel.create({ 
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        data_pagamento, 
        data_vencimento,
        multa,
        juros,
        desconto,
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
      return await SaidaModel.update({ativo:false}, {where: {id:id}})
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

      return await SaidaModel.count({
        include: [
          { model: SubgrupoModel, as: "subgrupo", where }
        ],
      })
    } catch (error: any) {
      throw new Error(`Erro ao contar as notificações na base de dados: ${error.message}`);
    }
  }

  async sum(id: string) {
    try {
      console.log("id no repositorio : ", id)

      return await SaidaModel.sum('valor', { where: {id_grupo: id}
      });
    } catch (error) {
      
    }
  }
}

export { SaidaRepository }