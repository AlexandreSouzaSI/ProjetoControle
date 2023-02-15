/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISaidaRepository } from './../../../repositories/interfaces/ISaidaRepository';

@injectable()
class DeleteSaidaUseCase {
  constructor (
    @inject("SaidaRepository")
    private SaidaRepository: ISaidaRepository) {    
  } 

  async execute (id: string){

   await this.SaidaRepository.delete(id)
  }
}

export { DeleteSaidaUseCase }
