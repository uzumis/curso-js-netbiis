import { Router } from "express";
import CandidatosRouter from "./CandidatosRouter.js";
import EleicoesRouter from "./EleicoesRouter.js";
import EleitorRouter from "./EleitorRouter.js";
import VotosRouter from "./VotosRouter.js";

const router = Router();

router.use('/candidatos', CandidatosRouter);
router.use('/eleicoes', EleicoesRouter);
router.use('/eleitor', EleitorRouter);
router.use('/votos', VotosRouter);

export default router;