/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { IEntradaRepository } from '../../../repositories/interfaces/IEntradaRepository';
import { inject, injectable } from 'tsyringe'

@injectable()
class SumEntradaUseCase {
  constructor (
    @inject("EntradaRepository")
    private EntradaRepository: IEntradaRepository
    ) {}

  async execute (id?: string){
    const teste = await this.EntradaRepository.sum()
    return teste
  }
}

export { SumEntradaUseCase }
