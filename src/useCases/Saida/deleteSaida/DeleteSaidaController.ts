/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteSaidaUseCase } from './DeleteSaidaUseCase';

class DeleteSaidaController {
   async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
     const deleteSaidaUseCase = container.resolve(DeleteSaidaUseCase)
     const result = await deleteSaidaUseCase.execute(id)
     return response.status(200).json(result)
    } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { DeleteSaidaController }
