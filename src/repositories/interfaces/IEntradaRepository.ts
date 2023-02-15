/* eslint-disable camelcase */
import { Entrada } from './../../entities/Entrada';
/* eslint-disable no-undef */

export interface IParams {
    filter?: any,
    page?: number,
    limit?: number,
    sort?: any
  }

export interface IEntradaRepository {
    findAll(params: IParams, limitador: number, pagination: number): Promise<Entrada[]>;
    create(entrada: Entrada);
    update(entrada: Entrada, id: string );
    delete(id: string);
    findById(id: string);
    count(params: IParams): Promise<number>;
    sum(id?: string);
}
