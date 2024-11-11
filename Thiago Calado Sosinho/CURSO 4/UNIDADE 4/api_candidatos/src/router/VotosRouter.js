import {Router} from "express";
import * as VotosController from "../controller/VotosController.js";
import EleitorMiddleware from "../middlewares/authorization/RotaEleitor.js";
import { validateBody } from '../middlewares/validators/MainValidator/MainValidator.js';
import votoSchema from '../middlewares/validators/VotosValidator.js';

const router = Router();

router
    .post('/', EleitorMiddleware,validateBody(votoSchema), VotosController.inserirVoto);

export default router;