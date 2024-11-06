import { Router } from "express";
import * as EleicoesController from "../controller/EleicoesController.js";

const router = Router();

router.get('/', EleicoesController.listarEleicoes)
.get('/:id', EleicoesController.obterEleicao)
.post('/',EleicoesController.criarEleicao)
.put('/:id', EleicoesController.atualizarEleicao)
.delete('/:id', EleicoesController.deletarEleicao)


export default router;