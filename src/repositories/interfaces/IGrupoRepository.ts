/* eslint-disable camelcase */
import { Grupo } from './../../entities/Grupo';
/* eslint-disable no-undef */

export interface IParams {
    filter?: any,
    page?: number,
    limit?: number,
    sort?: any
  }

export interface IGrupoRepository {
    findAll(params: IParams, limitador: number, pagination: number): Promise<Grupo[]>;
    create(grupo: Grupo);
    update(grupo: Grupo, id: string );
    delete(id: string);
    findById(id: string);
    count(params: IParams): Promise<number>;
}