/* eslint-disable camelcase */
import { container } from 'tsyringe';
import { Request, Response } from 'express'
import { CreateGrupoUseCase } from './CreateGrupoUseCase';

class CreateGrupoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      nome
    } = request.body
    try {
     const createGrupoUseCase = container.resolve(CreateGrupoUseCase)
     await createGrupoUseCase.execute({
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      nome
     })
    return response.status(201).send()
  } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { CreateGrupoController }
