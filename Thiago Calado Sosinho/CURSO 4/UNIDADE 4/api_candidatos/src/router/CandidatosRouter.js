import { Router } from "express";
import * as CandidatosController from "../controller/CandidatosController.js";
import AdminMiddleware from "../middlewares/authorization/RotaAdmin.js";
import { CandidatoValidator, verificarCandidatoExistente } from "../middlewares/validators/CadidatosValidador.js"
import * as Validator from "../middlewares/validators/MainValidator/MainValidator.js";
import { idValidator } from "../middlewares/validators/idValidator/ValidateId.js";

const router = Router();

router
    .get('/', CandidatosController.listarCandidatos)
    .get('/:id',
        Validator.validateId(idValidator),
        verificarCandidatoExistente, 
        CandidatosController.buscarCandidato
    )
    .get('/candidatos-da-eleicao/:id',
        Validator.validateId(idValidator),
        CandidatosController.buscarCandidatoPeloNumero
    )
    .post('/',
        AdminMiddleware,
        Validator.validateBody(CandidatoValidator),
        CandidatosController.criarCandidato
    )
    .put('/:id',
        AdminMiddleware,
        Validator.validateBody(CandidatoValidator),
        CandidatosController.atualizarCandidato
    )
    .delete('/:id',
        Validator.validateId(idValidator),
        AdminMiddleware,
        CandidatosController.deletarCandidato
    );

export default router;
