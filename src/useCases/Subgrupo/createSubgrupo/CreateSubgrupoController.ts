/* eslint-disable camelcase */
import { container } from 'tsyringe';
import { Request, Response } from 'express'
import { CreateSubgrupoUseCase } from './CreateSubgrupoUseCase';

class CreateSubgrupoController {
   async handle(request: Request, response: Response): Promise<Response> {
    const { 
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      nome, 
      tipo, 
      pix,
      codigo_de_barra,
      id_grupo
    } = request.body
    try {
     const createSubgrupoUseCase = container.resolve(CreateSubgrupoUseCase)
     await createSubgrupoUseCase.execute({
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      nome, 
      tipo, 
      pix,
      codigo_de_barra,
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

export { CreateSubgrupoController }
