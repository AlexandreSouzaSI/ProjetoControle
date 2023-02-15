import { inject, injectable } from 'tsyringe'
import { IEntradaRepository } from './../../../repositories/interfaces/IEntradaRepository';

@injectable()
class FindByIdEntradaUseCase {
  constructor (
    @inject("EntradaRepository")
    private EntradaRepository: IEntradaRepository  ) {}

  async execute (id: string) {
    return await this.EntradaRepository.findById(id)
  }
}

export { FindByIdEntradaUseCase }
