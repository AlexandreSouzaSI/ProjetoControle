import { Router } from 'express'
import { CreateGrupoController } from '../useCases/Grupo/createGrupo/CreateGrupoController'
import { DeleteGrupoController } from '../useCases/Grupo/deleteGrupo/DeleteGrupoController'
import { FindAllGrupoController } from '../useCases/Grupo/findAllGrupo/FindAllGrupoController'
import { FindByIdGrupoController } from '../useCases/Grupo/findByIdGrupo/FindByIdGrupoController'
import { UpdateGrupoController } from '../useCases/Grupo/updateGrupo/UpdateGrupoController'

const GrupoRouters = Router()

const createGrupoController = new CreateGrupoController()
const findAllGrupoController = new FindAllGrupoController()
const findByIdGrupoController = new FindByIdGrupoController()
const deleteGrupoController = new DeleteGrupoController()
const updateGrupoController = new UpdateGrupoController()

GrupoRouters.post('/', [], createGrupoController.handle)

GrupoRouters.get('/', [], findAllGrupoController.handle)

GrupoRouters.get('/:id', [], findByIdGrupoController.handle)

GrupoRouters.delete('/delete/:id', [], deleteGrupoController.handle)

GrupoRouters.put('/alterar/:id', [], updateGrupoController.handle)

export { GrupoRouters }
