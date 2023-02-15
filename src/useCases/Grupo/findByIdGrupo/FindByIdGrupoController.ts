import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindByIdGrupoUseCase } from './FindByIdGrupoUseCase';

class FindByIdGrupoController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const listGrupoUseCase = container.resolve(FindByIdGrupoUseCase)
      const grupo = await listGrupoUseCase.execute(id)
      return response.status(200).json({
        Grupo: grupo
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindByIdGrupoController }
