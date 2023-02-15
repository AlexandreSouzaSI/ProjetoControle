import { Router } from 'express'
import { CreateSubgrupoController } from '../useCases/Subgrupo/createSubgrupo/CreateSubgrupoController'
import { DeleteSubgrupoController } from '../useCases/Subgrupo/deleteSubgrupo/DeleteSubgrupoController'
import { FindAllSubgrupoController } from '../useCases/Subgrupo/findAllSubgrupo/FindAllSubgrupoController'
import { FindByIdSubgrupoController } from '../useCases/Subgrupo/findByIdSubgrupo/FindByIdSubgrupoController'
import { UpdateSubgrupoController } from '../useCases/Subgrupo/updateSubgrupo/UpdateSubgrupoController'

const SubgrupoRouters = Router()

const createSubgrupoController = new CreateSubgrupoController()
const findAllSubgrupoController = new FindAllSubgrupoController()
const findByIdSubgrupoController = new FindByIdSubgrupoController()
const deleteSubgrupoController = new DeleteSubgrupoController()
const updateSubgrupoController = new UpdateSubgrupoController()

SubgrupoRouters.post('/', [], createSubgrupoController.handle)

SubgrupoRouters.get('/', [], findAllSubgrupoController.handle)

SubgrupoRouters.get('/:id', [], findByIdSubgrupoController.handle)

SubgrupoRouters.delete('/delete/:id', [], deleteSubgrupoController.handle)

SubgrupoRouters.put('/alterar/:id', [], updateSubgrupoController.handle)

export { SubgrupoRouters }
