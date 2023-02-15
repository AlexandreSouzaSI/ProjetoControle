/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { inject, injectable } from 'tsyringe'
import { ISubgrupoRepository } from './../../../repositories/interfaces/ISubgrupoRepository';
import { Subgrupo } from './../../../entities/Subgrupo';

@injectable()
class UpdateSubgrupoUseCase {
  constructor (
    @inject("SubgrupoRepository")
    private SubgrupoRepository: ISubgrupoRepository
    ) {}

  async execute (data: Subgrupo, id: string){
    const entrada = await this.SubgrupoRepository.findById(id)
    if(!entrada){
      throw {
        status: 404,
        message: 'Subgrupo não encontrado!'
      }
    }
    await this.SubgrupoRepository.update(data, id)
  }
}

export { UpdateSubgrupoUseCase }
