/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { IGrupoRepository } from './../../../repositories/interfaces/IGrupoRepository';
import { Grupo } from './../../../entities/Grupo';

@injectable()
class UpdateGrupoUseCase {
  constructor (
    @inject("GrupoRepository")
    private GrupoRepository: IGrupoRepository
    ) {}

  async execute (data: Grupo, id: string){
    const grupo = await this.GrupoRepository.findById(id)
    if(!grupo){
      throw {
        status: 404,
        message: 'Grupo não encontrado!'
      }
    }
    await this.GrupoRepository.update(data, id)
  }
}

export { UpdateGrupoUseCase }
