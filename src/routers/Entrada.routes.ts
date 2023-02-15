import { Router } from 'express'
import { SumEntradaController } from '../useCases/Entrada/sumEntrada/SumEntradaController'
import { CreateEntradaController } from '../useCases/Entrada/createEntrada/CreateEntradaController'
import { DeleteEntradaController } from '../useCases/Entrada/deleteEntrada/DeleteEntradaController'
import { FindAllEntradaController } from '../useCases/Entrada/findAllEntrada/FindAllEntradaController'
import { FindByIdEntradaController } from '../useCases/Entrada/findByIdEntrada/FindByIdEntradaController'
import { UpdateEntradaController } from '../useCases/Entrada/updateEntrada/UpdateEntradaController'

const EntradaRouters = Router()

const createEntradaController = new CreateEntradaController()
const findAllEntradaController = new FindAllEntradaController()
const findByIdEntradaController = new FindByIdEntradaController()
const sumEntradaController = new SumEntradaController()
const deleteEntradaController = new DeleteEntradaController()
const updateEntradaController = new UpdateEntradaController()

EntradaRouters.post('/', [], createEntradaController.handle)

EntradaRouters.get('/', [], findAllEntradaController.handle)

EntradaRouters.get('/somar', [], sumEntradaController.handle)

EntradaRouters.get('/:id', [], findByIdEntradaController.handle)

EntradaRouters.delete('/delete/:id', [], deleteEntradaController.handle)

EntradaRouters.put('/alterar/:id', [], updateEntradaController.handle)

export { EntradaRouters }
