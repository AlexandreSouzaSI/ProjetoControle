/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { IEntradaRepository } from './../../../repositories/interfaces/IEntradaRepository';
import { Entrada } from './../../../entities/Entrada';

@injectable()
class UpdateEntradaUseCase {
  constructor (
    @inject("EntradaRepository")
    private EntradaRepository: IEntradaRepository
    ) {}

  async execute (data: Entrada, id: string){
    const entrada = await this.EntradaRepository.findById(id)
    if(!entrada){
      throw {
        status: 404,
        message: 'Entrada não encontrada!'
      }
    }
    await this.EntradaRepository.update(data, id)
  }
}

export { UpdateEntradaUseCase }
