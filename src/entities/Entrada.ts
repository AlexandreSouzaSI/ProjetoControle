/* eslint-disable camelcase */
import { uuid } from 'uuidv4'

export class Entrada {
    public readonly id?: string;
    public ativo?: boolean; 
    public createdAt?: Date;
    public updatedAt?: Date;
    public data?: string;
    public id_subgrupo?: string;
    public valor?: number;
    public id_grupo?: string;

    constructor (props: Omit<Entrada, 'id'>, id?: string) {
      Object.assign(this,props)
      if (!id) this.id = uuid()
      if (!props.createdAt) this.createdAt = new Date()
      if (!props.updatedAt) this.updatedAt = new Date()
      if (!props.ativo) this.ativo = true
    }
}
