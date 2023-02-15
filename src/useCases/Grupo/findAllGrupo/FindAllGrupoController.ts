import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindAllGrupoUseCase } from './FindAllGrupoUseCase';

class FindAllGrupoController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { filter, sort, include, ...rest } = request.query
      const params = {
        ...rest,
        filter: filter ? JSON.parse(filter.toString()) : filter,
        sort: sort ? JSON.parse(sort.toString()) : sort,
        include: include ? JSON.parse(include.toString()) : include
      }

      const listGrupoUseCase = container.resolve(FindAllGrupoUseCase)
      const grupo = await listGrupoUseCase.execute(params)
      return response.status(200).set({
        'Total-Elements': grupo.totalElements,
        'Total-Pages': grupo.totalPages,
        'Current-Page': grupo.currentPage
      })
      .json({
        data: {
          'items': grupo.data,
          'totalElements': grupo.totalElements,
          'totalPages': grupo.totalPages,
          'currentPage': grupo.currentPage
        }
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindAllGrupoController }

