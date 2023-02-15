import { inject, injectable } from 'tsyringe'
import { ISubgrupoRepository } from './../../../repositories/interfaces/ISubgrupoRepository';

@injectable()
class FindByIdSubgrupoUseCase {
  constructor (
    @inject("SubgrupoRepository")
    private SubgrupoRepository: ISubgrupoRepository  ) {}

  async execute (id: string) {
    return await this.SubgrupoRepository.findById(id)
  }
}

export { FindByIdSubgrupoUseCase }
