 /* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { UpdateSaidaUseCase } from './UpdateSaidaUseCase';

class UpdateSaidaController {
   async handle(request: Request, response: Response) {
     try {
      const { id } = request.params
      const updateSaidaUseCase = container.resolve(UpdateSaidaUseCase)
      const result = await updateSaidaUseCase.execute(request.body, id)
      return response.status(200).json(result)
    } catch(err) {
      return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { UpdateSaidaController }
