 /* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { UpdateEntradaUseCase } from './UpdateEntradaUseCase';

class UpdateEntradaController {
   async handle(request: Request, response: Response) {
     try {
      const { id } = request.params
      const updateEntradaUseCase = container.resolve(UpdateEntradaUseCase)
      const result = await updateEntradaUseCase.execute(request.body, id)
      return response.status(200).json(result)
    } catch(err) {
      return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { UpdateEntradaController }
