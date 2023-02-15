/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { IEntradaRepository } from './../../../repositories/interfaces/IEntradaRepository';

@injectable()
class DeleteEntradaUseCase {
  constructor (
    @inject("EntradaRepository")
    private EntradaRepository: IEntradaRepository) {    
  } 

  async execute (id: string){

   await this.EntradaRepository.delete(id)
  }
}

export { DeleteEntradaUseCase }
