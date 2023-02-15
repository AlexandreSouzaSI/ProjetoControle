/* eslint-disable camelcase */
import { container } from 'tsyringe';
import { Request, Response } from 'express'
import { CreateSaidaUseCase } from './CreateSaidaUseCase';

class CreateSaidaController {
   async handle(request: Request, response: Response): Promise<Response> {
    const { 
      id, 
      ativo, 
      createdAt, 
      updatedAt,
      data_pagamento, 
      data_vencimento, 
      multa,
      juros,
      desconto,
      id_subgrupo,
      valor,
      id_grupo
    } = request.body
    try {
      const createSaidaUseCase = container.resolve(CreateSaidaUseCase)
      const result = await createSaidaUseCase.execute({
        id, 
        ativo, 
        createdAt, 
        updatedAt,
        data_pagamento, 
        data_vencimento, 
        multa,
        juros,
        desconto,
        id_subgrupo,
        valor,
        id_grupo
      })
      console.log("Resultado: ", result)
    return response.status(201).json({
      Saida: result
    })
  } catch(err) {
    return response.status(400).json({
      message: err.message || 'Erro inesperado!'
    })
  }
}
}

export { CreateSaidaController }
