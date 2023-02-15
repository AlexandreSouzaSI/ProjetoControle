import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindByIdEntradaUseCase } from './FindByIdEntradaUseCase';

class FindByIdEntradaController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const listEntradaUseCase = container.resolve(FindByIdEntradaUseCase)
      const entrada = await listEntradaUseCase.execute(id)
      return response.status(200).json({
        Associados: entrada
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindByIdEntradaController }
