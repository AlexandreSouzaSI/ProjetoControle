/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { IEntradaRepository } from './../../../repositories/interfaces/IEntradaRepository';
import { Entrada } from './../../../entities/Entrada';

@injectable()
class CreateEntradaUseCase {
  constructor (
    @inject("EntradaRepository")
    private EntradaRepository: IEntradaRepository
    ) {}

  async execute (data: Entrada): Promise<void>{
    const entrada = new Entrada(data)
   await this.EntradaRepository.create(entrada)
  }
}

export { CreateEntradaUseCase }
