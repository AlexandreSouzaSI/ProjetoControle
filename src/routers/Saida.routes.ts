import { Router } from 'express'
import { SumSaidaController } from '../useCases/Saida/sumSaida/SumSaidaController'
import { CreateSaidaController } from '../useCases/Saida/createSaida/CreateSaidaController'
import { DeleteSaidaController } from '../useCases/Saida/deleteSaida/DeleteSaidaController'
import { FindAllSaidaController } from '../useCases/Saida/findAllSaida/FindAllSaidaController'
import { FindByIdSaidaController } from '../useCases/Saida/findByIdSaida/FindByIdSaidaController'
import { UpdateSaidaController } from '../useCases/Saida/updateSaida/UpdateSaidaController'

const SaidaRouters = Router()

const createSaidaController = new CreateSaidaController()
const findAllSaidaController = new FindAllSaidaController()
const findByIdSaidaController = new FindByIdSaidaController()
const sumSaidaController = new SumSaidaController()
const deleteSaidaController = new DeleteSaidaController()
const updateSaidaController = new UpdateSaidaController()

SaidaRouters.post('/', [], createSaidaController.handle)

SaidaRouters.get('/', [], findAllSaidaController.handle)

SaidaRouters.get('/soma/:id', [], sumSaidaController.handle)

SaidaRouters.get('/:id', [], findByIdSaidaController.handle)

SaidaRouters.delete('/delete/:id', [], deleteSaidaController.handle)

SaidaRouters.put('/alterar/:id', [], updateSaidaController.handle)

export { SaidaRouters }
