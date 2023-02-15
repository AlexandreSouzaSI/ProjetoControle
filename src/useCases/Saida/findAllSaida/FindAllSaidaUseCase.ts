import { inject, injectable } from 'tsyringe'
import { ISaidaRepository, IParams } from './../../../repositories/interfaces/ISaidaRepository';
import { Saida } from './../../../entities/Saida';

interface IResponse {
  data: Saida[],
  totalElements?: number,
  totalPages?: number,
  currentPage?: number
}


@injectable()
class FindAllSaidaUseCase {
  constructor (
    @inject("SaidaRepository")
    private SaidaRepository: ISaidaRepository  ) {}

  async execute (params: IParams): Promise<IResponse> {
    const { page, limit } = params
    const limitador = limit ? limit : 10
    const pagination = page ? page : 1
    const totalElements = await this.SaidaRepository.count(params)
    const result = await this.SaidaRepository.findAll(params, limitador, pagination)
    return {
      data: result,
      totalElements,
      currentPage: pagination ? Number(pagination) : totalElements === 0 ? 0 : 1,
      totalPages: limitador ? Math.ceil(totalElements / Number(limitador)) : totalElements === 0 ? 0 : 1
    }
  }
}

export { FindAllSaidaUseCase }
