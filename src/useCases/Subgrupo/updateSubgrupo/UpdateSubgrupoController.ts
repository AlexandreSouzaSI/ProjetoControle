 /* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { UpdateSubgrupoUseCase } from './UpdateSubgrupoUseCase';

class UpdateSubgrupoController {
   async handle(request: Request, response: Response) {
     try {
      const { id } = request.params
      const updateSubgrupoUseCase = container.resolve(UpdateSubgrupoUseCase)
      const result = await updateSubgrupoUseCase.execute(request.body, id)
      return response.status(200).json(result)
    } catch(err) {
      return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { UpdateSubgrupoController }
