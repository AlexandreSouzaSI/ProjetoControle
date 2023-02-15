 /* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { UpdateGrupoUseCase } from './UpdateGrupoUseCase';

class UpdateGrupoController {
   async handle(request: Request, response: Response) {
     try {
      const { id } = request.params
      const updateGrupoUseCase = container.resolve(UpdateGrupoUseCase)
      const result = await updateGrupoUseCase.execute(request.body, id)
      return response.status(200).json(result)
    } catch(err) {
      return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { UpdateGrupoController }
