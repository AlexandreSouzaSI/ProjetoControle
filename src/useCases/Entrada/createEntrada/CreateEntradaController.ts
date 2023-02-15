/* eslint-disable camelcase */
import { container } from 'tsyringe';
import { Request, Response } from 'express'
import { CreateEntradaUseCase } from './CreateEntradaUseCase';

class CreateEntradaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      data, 
      id_subgrupo, 
      valor,
      id_grupo
    } = request.body
    try {
     const createEntradaUseCase = container.resolve(CreateEntradaUseCase)
     await createEntradaUseCase.execute({
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      data, 
      id_subgrupo, 
      valor,
      id_grupo
     })
    return response.status(201).send()
  } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { CreateEntradaController }
