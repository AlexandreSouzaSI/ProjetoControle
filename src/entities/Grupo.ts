/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid'

export class Grupo {
    public readonly id?: string;
    public ativo?: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
    public nome?: string;

    constructor (props: Omit<Grupo, 'id'>, id?: string) {
      Object.assign(this,props)
      if (!id) this.id = uuid()
      if (!props.createdAt) this.createdAt = new Date()
      if (!props.updatedAt) this.updatedAt = new Date()
      if (!props.ativo) this.ativo = true
    }
}
