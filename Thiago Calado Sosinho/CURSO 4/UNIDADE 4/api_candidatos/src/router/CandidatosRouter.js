import { Router } from "express";
import * as CandidatosController from "../controller/CandidatosController.js";

const router = Router();

router.get('/', CandidatosController.listarCandidatos)
.get('/:id', CandidatosController.buscarCandidatoPeloNumero)
.post('/',CandidatosController.criarCandidato)
.put('/:id', CandidatosController.atualizarCandidato)
.delete('/:id', CandidatosController.deletarCandidato)


export default router;