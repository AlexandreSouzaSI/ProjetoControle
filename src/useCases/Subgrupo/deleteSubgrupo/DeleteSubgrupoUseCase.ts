/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISubgrupoRepository } from './../../../repositories/interfaces/ISubgrupoRepository';

@injectable()
class DeleteSubgrupoUseCase {
  constructor (
    @inject("SubgrupoRepository")
    private SubgrupoRepository: ISubgrupoRepository) {    
  } 

  async execute (id: string){

   await this.SubgrupoRepository.delete(id)
  }
}

export { DeleteSubgrupoUseCase }
