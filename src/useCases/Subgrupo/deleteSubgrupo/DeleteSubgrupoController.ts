/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { DeleteSubgrupoUseCase } from './DeleteSubgrupoUseCase';

class DeleteSubgrupoController {
   async handle(request: Request, response: Response) {
    const { id } = request.params
    try {
     const deleteSubgrupoUseCase = container.resolve(DeleteSubgrupoUseCase)
     const result = await deleteSubgrupoUseCase.execute(id)
     return response.status(200).json(result)
    } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { DeleteSubgrupoController }
