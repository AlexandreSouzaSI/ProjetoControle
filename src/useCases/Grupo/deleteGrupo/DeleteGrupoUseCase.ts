/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { IGrupoRepository } from './../../../repositories/interfaces/IGrupoRepository';

@injectable()
class DeleteGrupoUseCase {
  constructor (
    @inject("GrupoRepository")
    private GrupoRepository: IGrupoRepository) {    
  } 

  async execute (id: string){

   await this.GrupoRepository.delete(id)
  }
}

export { DeleteGrupoUseCase }
