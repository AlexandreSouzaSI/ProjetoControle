/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteEntradaUseCase } from './DeleteEntradaUseCase';

class DeleteEntradaController {
   async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
     const deleteEntradaUseCase = container.resolve(DeleteEntradaUseCase)
     const result = await deleteEntradaUseCase.execute(id)
     return response.status(200).json(result)
    } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { DeleteEntradaController }
