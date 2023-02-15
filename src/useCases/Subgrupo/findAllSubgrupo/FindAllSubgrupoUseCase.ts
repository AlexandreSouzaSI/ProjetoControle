import { inject, injectable } from 'tsyringe'
import { ISubgrupoRepository, IParams } from './../../../repositories/interfaces/ISubgrupoRepository';
import { Subgrupo } from './../../../entities/Subgrupo';

interface IResponse {
  data: Subgrupo[],
  totalElements?: number,
  totalPages?: number,
  currentPage?: number
}

@injectable()
class FindAllSubgrupoUseCase {
  constructor (
    @inject("SubgrupoRepository")
    private SubgrupoRepository: ISubgrupoRepository  ) {}

    async execute (params: IParams): Promise<IResponse> {
      const { page, limit} = params
      const limitador = limit ? limit : 8
      const pagination = page ? page : 1
      const totalElements = await this.SubgrupoRepository.count(params)
      const result = await this.SubgrupoRepository.findAll(params, limitador, pagination)
      return {
        data: result,
        totalElements,
        currentPage: pagination ? Number(pagination) : totalElements === 0 ? 0 : 1,
        totalPages: limitador ? Math.ceil(totalElements / Number(limitador)) : totalElements === 0 ? 0 : 1
      }
    }
}

export { FindAllSubgrupoUseCase }
