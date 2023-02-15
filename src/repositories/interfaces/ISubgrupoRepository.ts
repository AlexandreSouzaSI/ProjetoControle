/* eslint-disable camelcase */
import { Subgrupo } from './../../entities/Subgrupo';
/* eslint-disable no-undef */

export interface IParams {
    filter?: any,
    page?: number,
    limit?: number,
    sort?: any
  }

export interface ISubgrupoRepository {
    findAll(params: IParams, limitador: number, pagination: number): Promise<Subgrupo[]>;
    create(subgrupo: Subgrupo);
    update(subgrupo: Subgrupo, id: string );
    delete(id: string);
    findById(id: string);
    count(params: IParams): Promise<number>;
}
