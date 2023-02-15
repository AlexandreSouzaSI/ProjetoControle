/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISaidaRepository } from './../../../repositories/interfaces/ISaidaRepository';
import { Saida } from './../../../entities/Saida';

@injectable()
class UpdateSaidaUseCase {
  constructor (
    @inject("SaidaRepository")
    private SaidaRepository: ISaidaRepository
    ) {}

  async execute (data: Saida, id: string){
    const entrada = await this.SaidaRepository.findById(id)
    if(!entrada){
      throw {
        status: 404,
        message: 'Saida não encontrada!'
      }
    }
    await this.SaidaRepository.update(data, id)
  }
}

export { UpdateSaidaUseCase }
