// EleicoesRouter.js (Configuração do roteador de Eleições com ajustes)

import { Router } from "express";
import * as EleicoesController from "../controller/EleicoesController.js";
import AdminMiddleware from "../middlewares/authorization/RotaAdmin.js";
import { EleicoesValidator, verificarEleicaoExistente } from "../middlewares/validators/EleicoesValidator.js";
import * as Validator from "../middlewares/validators/MainValidator/MainValidator.js";
import { idValidator } from "../middlewares/validators/idValidator/ValidateId.js";

const router = new Router();

router
    .get('/', EleicoesController.listarEleicoes)
    .get('/:id',
        Validator.validateId(idValidator),
        verificarEleicaoExistente, 
        EleicoesController.obterEleicao
    )
    .get('/:id/resumo', EleicoesController.resumoEleicao)
    .post('/novo-candidato',
        AdminMiddleware, 
        EleicoesController.adicionarCandidatoEleicao
    )
    .put('/remover-candidato',
        AdminMiddleware, 
        EleicoesController.removerCandidatoEleicao
    )
    .post('/',
        AdminMiddleware, 
        Validator.validateBody(EleicoesValidator),
        EleicoesController.criarEleicao
    )
    .put('/:id',
        AdminMiddleware, 
        Validator.validateBody(EleicoesValidator), 
        EleicoesController.atualizarEleicao
    )
    .delete('/:id',
        Validator.validateId(idValidator),
        AdminMiddleware,
        verificarEleicaoExistente, 
        EleicoesController.deletarEleicao
    );

export default router;
