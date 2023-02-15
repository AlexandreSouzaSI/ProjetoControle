 /* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { SumSaidaUseCase } from './SumSaidaUseCase';

class SumSaidaController {
   async handle(request: Request, response: Response) {
     try {
      const { id } = request.params
      const sumSaidaUseCase = container.resolve(SumSaidaUseCase)
      const result = await sumSaidaUseCase.execute(id)
      return response.status(200).json({
        data: result
      })
    } catch(err) {
      return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { SumSaidaController }
