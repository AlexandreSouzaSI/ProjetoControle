/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteGrupoUseCase } from './DeleteGrupoUseCase';

class DeleteGrupoController {
   async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
     const deleteGrupoUseCase = container.resolve(DeleteGrupoUseCase)
     const result = await deleteGrupoUseCase.execute(id)
     return response.status(200).json(result)
    } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { DeleteGrupoController }
