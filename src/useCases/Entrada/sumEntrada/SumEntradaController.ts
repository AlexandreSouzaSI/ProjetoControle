 /* eslint-disable camelcase */
import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { SumEntradaUseCase } from './SumEntradaUseCase';

class SumEntradaController {
   async handle(request: Request, response: Response) {
    console.log("aqui")
     try {
      const sumEntradaUseCase = container.resolve(SumEntradaUseCase)
      const result = await sumEntradaUseCase.execute()
      console.log("result",result)
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

export { SumEntradaController }
