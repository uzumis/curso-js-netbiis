import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js";
import { EleitorValidator,ValidarLoginMiddleware, verificarEleitorExistente, ValidarSenhaMiddleware } from "../middlewares/validators/EleitorValidator.js";
import * as Validator from "../middlewares/validators/MainValidator/MainValidator.js";
import { idValidator } from "../middlewares/validators/idValidator/ValidateId.js";
import AdminMiddleware from "../middlewares/authorization/RotaAdmin.js";
import { EleitorAuthMiddleware } from "../middlewares/AuthMiddlewares.js";
const router = Router();

router
    .get('/', EleitorAuthMiddleware, EleitorController.listarEleitores)
    .get('/:id',
        Validator.validateId(idValidator), 
        verificarEleitorExistente, 
        EleitorController.obterEleitor
    )
    .post('/', 
        Validator.validateBody(EleitorValidator), 
        EleitorController.criarEleitor
    )
    .post('/login', ValidarLoginMiddleware, EleitorController.login)
    .put('/:id',
        AdminMiddleware,
        Validator.validateBody(EleitorValidator), 
        verificarEleitorExistente, 
        EleitorController.atualizarEleitor
    )
    .put('/:id/atualizar-senha',
        ValidarSenhaMiddleware,
        EleitorController.atualizarSenha
    )
    .delete('/:id',
        Validator.validateId(idValidator),
        AdminMiddleware,
        verificarEleitorExistente, 
        EleitorController.deletarEleitor
    )
    .put('/atualizar-perfil/:id'
        , EleitorController.atualizarPerfilEleitor);


export default router;
