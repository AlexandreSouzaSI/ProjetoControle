import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindAllSubgrupoUseCase } from './FindAllSubgrupoUseCase';

class FindAllSubgrupoController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { filter, sort, include, ...rest } = request.query
      const params = {
        ...rest,
        filter: filter ? JSON.parse(filter.toString()) : filter,
        sort: sort ? JSON.parse(sort.toString()) : sort,
        include: include ? JSON.parse(include.toString()) : include
      }

      const listSubgrupoUseCase = container.resolve(FindAllSubgrupoUseCase)
      const subgrupo = await listSubgrupoUseCase.execute(params)
      return response.status(200).set({
        'Total-Elements': subgrupo.totalElements,
        'Total-Pages': subgrupo.totalPages,
        'Current-Page': subgrupo.currentPage
      })
      .json({
        data: {
          'items': subgrupo.data,
          'totalElements': subgrupo.totalElements,
          'totalPages': subgrupo.totalPages,
          'currentPage': subgrupo.currentPage
        }
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindAllSubgrupoController }
