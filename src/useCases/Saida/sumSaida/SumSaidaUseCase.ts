/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISaidaRepository } from './../../../repositories/interfaces/ISaidaRepository';

@injectable()
class SumSaidaUseCase {
  constructor (
    @inject("SaidaRepository")
    private SaidaRepository: ISaidaRepository
    ) {}

  async execute (id: string){
    const teste = await this.SaidaRepository.sum(id)
    return teste
  }
}

export { SumSaidaUseCase }
