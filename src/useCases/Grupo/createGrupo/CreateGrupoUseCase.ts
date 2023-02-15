/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { IGrupoRepository } from './../../../repositories/interfaces/IGrupoRepository';
import { Grupo } from './../../../entities/Grupo';

@injectable()
class CreateGrupoUseCase {
  constructor (
    @inject("GrupoRepository")
    private GrupoRepository: IGrupoRepository
    ) {}

  async execute (data: Grupo): Promise<void>{
    const grupo = new Grupo(data)
    await this.GrupoRepository.create(grupo)
  }
}

export { CreateGrupoUseCase }

