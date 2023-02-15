/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid'

export class Saida {
    public readonly id?: string;

    public ativo?: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
    public data_pagamento?: string;
    public data_vencimento?: string;
    public multa?: number;
    public juros?: number;
    public desconto?: number; 
    public id_subgrupo?: string;
    public valor?: number;
    public id_grupo?: string

    constructor (props: Omit<Saida, 'id'>, id?: string) {
      Object.assign(this,props)
      if (!id) this.id = uuid()
      if (!props.createdAt) this.createdAt = new Date()
      if (!props.updatedAt) this.updatedAt = new Date()
      if (!props.ativo) this.ativo = true
    }
}
