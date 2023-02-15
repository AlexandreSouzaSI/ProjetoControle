/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISubgrupoRepository } from './../../../repositories/interfaces/ISubgrupoRepository';
import { Subgrupo } from './../../../entities/Subgrupo';

@injectable()
class CreateSubgrupoUseCase {
  constructor (
    @inject("SubgrupoRepository")
    private SubgrupoRepository: ISubgrupoRepository
    ) {}

  async execute (data: Subgrupo): Promise<void>{
    const subgrupo = new Subgrupo(data)
   await this.SubgrupoRepository.create(subgrupo)
  }
}

export { CreateSubgrupoUseCase }
