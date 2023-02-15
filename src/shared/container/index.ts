import { container } from 'tsyringe'
import { SaidaRepository } from '../../repositories/implementations/SaidaRepository';
import { EntradaRepository } from '../../repositories/implementations/EntradaRepository';
import { GrupoRepository } from '../../repositories/implementations/GrupoRepository';
import { SubgrupoRepository } from '../../repositories/implementations/SubgrupoRepository';
import { IEntradaRepository } from './../../repositories/interfaces/IEntradaRepository';
import { ISaidaRepository } from './../../repositories/interfaces/ISaidaRepository';
import { IGrupoRepository } from './../../repositories/interfaces/IGrupoRepository';
import { ISubgrupoRepository } from './../../repositories/interfaces/ISubgrupoRepository';

container.registerSingleton<IEntradaRepository>(
    "EntradaRepository",
    EntradaRepository
)

container.registerSingleton<ISaidaRepository>(
    "SaidaRepository",
    SaidaRepository
)

container.registerSingleton<IGrupoRepository>(
    "GrupoRepository",
    GrupoRepository
)

container.registerSingleton<ISubgrupoRepository>(
    "SubgrupoRepository",
    SubgrupoRepository
)