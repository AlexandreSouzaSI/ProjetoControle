/* eslint-disable camelcase */
import { uuid } from 'uuidv4';

export class Subgrupo {
    public readonly id: string;
    public ativo?: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
    public nome?: string;
    public tipo?: string;
    public pix?: string;
    public codigo_de_barra?: string;
    public id_grupo?: string;

    constructor (props: Omit<Subgrupo, 'id'>, id?: string) {
      Object.assign(this, props)
      if (!id) this.id = uuid()
      if (!props.createdAt) this.createdAt = new Date()
      if (!props.updatedAt) this.updatedAt = new Date()
      if (!props.ativo) this.ativo = true
      }
}
