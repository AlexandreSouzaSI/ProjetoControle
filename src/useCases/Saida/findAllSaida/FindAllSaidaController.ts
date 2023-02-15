import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindAllSaidaUseCase } from './FindAllSaidaUseCase';

class FindAllSaidaController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { filter, sort, include, ...rest } = request.query
      const params = {
        ...rest,
        filter: filter ? JSON.parse(filter.toString()) : filter,
        sort: sort ? JSON.parse(sort.toString()) : sort,
        include: include ? JSON.parse(include.toString()) : include
      }

      const listSaidaUseCase = container.resolve(FindAllSaidaUseCase)
      const saida = await listSaidaUseCase.execute(params)
      return response.status(200).set({
        'Total-Elements': saida.totalElements,
        'Total-Pages': saida.totalPages,
        'Current-Page': saida.currentPage
      })
      .json({
        data: {
          'items': saida.data,
          'totalElements': saida.totalElements,
          'totalPages': saida.totalPages,
          'currentPage': saida.currentPage
        }
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindAllSaidaController }
