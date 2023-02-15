import { inject, injectable } from 'tsyringe'
import { IGrupoRepository } from './../../../repositories/interfaces/IGrupoRepository';

@injectable()
class FindByIdGrupoUseCase {
  constructor (
    @inject("GrupoRepository")
    private GrupoRepository: IGrupoRepository  ) {}

  async execute (id: string) {
    return await this.GrupoRepository.findById(id)
  }
}

export { FindByIdGrupoUseCase }
