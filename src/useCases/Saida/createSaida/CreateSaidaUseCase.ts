/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISaidaRepository } from './../../../repositories/interfaces/ISaidaRepository';
import { Saida } from './../../../entities/Saida';

@injectable()
class CreateSaidaUseCase {
  constructor (
    @inject("SaidaRepository")
    private SaidaRepository: ISaidaRepository
    ) {}

  async execute (data: Saida): Promise<void>{
    const saida = new Saida(data)
    await this.SaidaRepository.create(saida)
  }
}

export { CreateSaidaUseCase }
