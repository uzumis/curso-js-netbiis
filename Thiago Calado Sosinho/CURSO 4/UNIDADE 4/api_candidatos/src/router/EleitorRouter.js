import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js";
import { EleitorValidator, verificarEleitorExistente } from "../middlewares/validators/EleitorValidator.js";
import * as Validator from "../middlewares/validators/MainValidator/MainValidator.js";
import { idValidator } from "../middlewares/validators/idValidator/ValidateId.js";
import AdminMiddleware from "../middlewares/authorization/RotaAdmin.js";

const router = Router();

router
    .get('/', EleitorController.listarEleitores)
    .get('/:id',
        Validator.validateId(idValidator), 
        verificarEleitorExistente, 
        EleitorController.obterEleitor
    )
    .post('/',
        AdminMiddleware, 
        Validator.validateBody(EleitorValidator), 
        EleitorController.criarEleitor
    )
    .put('/:id',
        AdminMiddleware,
        Validator.validateBody(EleitorValidator), 
        verificarEleitorExistente, 
        EleitorController.atualizarEleitor
    )
    .delete('/:id',
        Validator.validateId(idValidator),
        AdminMiddleware,
        verificarEleitorExistente, 
        EleitorController.deletarEleitor
    );

export default router;
