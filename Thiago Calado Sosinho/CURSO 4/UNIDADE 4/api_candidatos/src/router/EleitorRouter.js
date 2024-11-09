import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js";
import { EleitorValidator} from "../validators/EleitorValidator.js";
import * as Validator from  "../validators/MainValidator/MainValidator.js";
import { idValidator } from "../validators/idValidator/ValidateId.js";
const router = Router();

router
    .get('/', EleitorController.listarEleitores)
    .get('/:id',Validator.validateId(idValidator), EleitorController.obterEleitor) 
    .post('/', Validator.validateBody(EleitorValidator), EleitorController.criarEleitor) 
    .put('/:id',Validator.validateId(idValidator),Validator.validateBody(EleitorValidator), EleitorController.atualizarEleitor)
    .delete('/:id', EleitorController.deletarEleitor);

export default router;
