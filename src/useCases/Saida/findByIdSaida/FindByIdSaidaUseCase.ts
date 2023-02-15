import { inject, injectable } from 'tsyringe'
import { ISaidaRepository } from './../../../repositories/interfaces/ISaidaRepository';

@injectable()
class FindByIdSaidaUseCase {
  constructor (
    @inject("SaidaRepository")
    private SaidaRepository: ISaidaRepository  ) {}

  async execute (id: string) {
    return await this.SaidaRepository.findById(id)
  }
}

export { FindByIdSaidaUseCase }
