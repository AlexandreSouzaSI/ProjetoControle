import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindAllEntradaUseCase } from './FindAllEntradaUseCase';

class FindAllEntradaController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { filter, sort, include, ...rest } = request.query
      const params = {
        ...rest,
        filter: filter ? JSON.parse(filter.toString()) : filter,
        sort: sort ? JSON.parse(sort.toString()) : sort,
        include: include ? JSON.parse(include.toString()) : include
      }

      const listEntradaUseCase = container.resolve(FindAllEntradaUseCase)
      const entradas = await listEntradaUseCase.execute(params)
      return response.status(200).set({
        'Total-Elements': entradas.totalElements,
        'Total-Pages': entradas.totalPages,
        'Current-Page': entradas.currentPage
      })
      .json({
        data: {
          'items': entradas.data,
          'totalElements': entradas.totalElements,
          'totalPages': entradas.totalPages,
          'currentPage': entradas.currentPage
        }
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindAllEntradaController }
