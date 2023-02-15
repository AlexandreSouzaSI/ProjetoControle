/* eslint-disable camelcase */
import { Saida } from './../../entities/Saida';
/* eslint-disable no-undef */

export interface IParams {
    filter?: any,
    page?: number,
    limit?: number,
    sort?: any
  }

export interface ISaidaRepository {
    findAll(params: IParams, limitador: number, pagination: number): Promise<Saida[]>;
    create(saida: Saida);
    update(saida: Saida, id: string );
    delete(id: string);
    findById(id: string);
    count(params: IParams): Promise<number>;
    sum(id: string);
}
