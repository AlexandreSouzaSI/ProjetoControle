import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindByIdSaidaUseCase } from './FindByIdSaidaUseCase';

class FindByIdSaidaController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const listSaidaUseCase = container.resolve(FindByIdSaidaUseCase)
      const saida = await listSaidaUseCase.execute(id)
      return response.status(200).json({
        Saida: saida
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindByIdSaidaController }
