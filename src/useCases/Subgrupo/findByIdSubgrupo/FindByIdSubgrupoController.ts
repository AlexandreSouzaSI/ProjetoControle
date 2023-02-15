import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { FindByIdSubgrupoUseCase } from './FindByIdSubgrupoUseCase';

class FindByIdSubgrupoController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const listSubgrupoUseCase = container.resolve(FindByIdSubgrupoUseCase)
      const subgrupo = await listSubgrupoUseCase.execute(id)
      return response.status(200).json({
        Subgrupo: subgrupo
      })
    } catch (err) {
      return response.status(err.status || 400).json({
       message:  err.message || 'Erro inesperado'
      })
    }
  }
}

export { FindByIdSubgrupoController }
