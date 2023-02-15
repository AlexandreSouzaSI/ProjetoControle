import { inject, injectable } from 'tsyringe'
import { IEntradaRepository, IParams } from './../../../repositories/interfaces/IEntradaRepository';
import { Entrada } from './../../../entities/Entrada';

interface IResponse {
  data: Entrada[],
  totalElements?: number,
  totalPages?: number,
  currentPage?: number
}

@injectable()
class FindAllEntradaUseCase {
  constructor (
    @inject("EntradaRepository")
    private EntradaRepository: IEntradaRepository  ) {}

  async execute (params: IParams): Promise<IResponse> {
        const { page, limit} = params
        const limitador = limit ? limit : 10
        const pagination = page ? page : 1
        const totalElements = await this.EntradaRepository.count(params)
        const result = await this.EntradaRepository.findAll(params, limitador, pagination)
        return {
          data: result,
          totalElements,
          currentPage: pagination ? Number(pagination) : totalElements === 0 ? 0 : 1,
          totalPages: limitador ? Math.ceil(totalElements / Number(limitador)) : totalElements === 0 ? 0 : 1
        }
      }
}

export { FindAllEntradaUseCase }
