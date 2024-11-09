import { Router } from "express";
import * as CandidatosController from "../controller/CandidatosController.js";
import { AdminMiddleware } from "../middlewares/authorization/RotaAdmin.js";
import { CandidatoValidator} from "../validators/CadidatosValidador.js";
import * as Validator from "../validators/MainValidator/MainValidator.js";
import { idValidator } from "../validators/idValidator/ValidateId.js";

const router = Router();

router.get('/', CandidatosController.listarCandidatos)
.get('/:id', Validator.validateId(idValidator), CandidatosController.buscarCandidato)
.get('/candidatos-da-eleicao/:id', Validator.validateId(idValidator),CandidatosController.buscarCandidatoPeloNumero)
.post('/',Validator.validateBody(CandidatoValidator), AdminMiddleware,CandidatosController.criarCandidato)
.put('/:id',Validator.validateBody(CandidatoValidator), AdminMiddleware,CandidatosController.atualizarCandidato)
.delete('/:id',Validator.validateId(idValidator),AdminMiddleware,CandidatosController.deletarCandidato)


export default router;