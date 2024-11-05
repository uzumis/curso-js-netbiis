import { Router } from "express";
import * as AlunosController from "../controller/AlunosController.js";

const router = Router();

router.get('/', AlunosController.listarAlunos)
.get('/:id', AlunosController.buscarAlunoPorId)
.post('/',AlunosController.criarAluno)
.put('/:id', AlunosController.atualzarAluno)
.delete('/:id', AlunosController.deletarAluno)


export default router;