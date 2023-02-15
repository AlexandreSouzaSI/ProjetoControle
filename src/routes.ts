import { Request, Response, Router } from "express";
import { EntradaRouters } from "./routers/Entrada.routes";
import { GrupoRouters } from "./routers/Grupo.routes";
import { SaidaRouters } from "./routers/Saida.routes";
import { SubgrupoRouters } from "./routers/Subgrupo.routes";

const router = Router()

router.use('/entradas', EntradaRouters )
router.use('/saidas', SaidaRouters )
router.use('/grupos', GrupoRouters )
router.use('/subgrupos', SubgrupoRouters )

export { router }