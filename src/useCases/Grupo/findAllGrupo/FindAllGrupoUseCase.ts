import { inject, injectable } from 'tsyringe'
import { IGrupoRepository, IParams } from './../../../repositories/interfaces/IGrupoRepository';
import { Grupo } from './../../../entities/Grupo';

interface IResponse {
  data: Grupo[],
  totalElements?: number,
  totalPages?: number,
  currentPage?: number
}

@injectable()
class FindAllGrupoUseCase {
  constructor (
    @inject("GrupoRepository")
    private GrupoRepository: IGrupoRepository  ) {}

  async execute (params: IParams): Promise<IResponse> {
    const { page, limit} = params
    const limitador = limit ? limit : 10
    const pagination = page ? page : 1
    const totalElements = await this.GrupoRepository.count(params)
    const result = await this.GrupoRepository.findAll(params, limitador, pagination)
    return {
      data: result,
      totalElements,
      currentPage: pagination ? Number(pagination) : totalElements === 0 ? 0 : 1,
      totalPages: limitador ? Math.ceil(totalElements / Number(limitador)) : totalElements === 0 ? 0 : 1
    }
  }
}

export { FindAllGrupoUseCase }