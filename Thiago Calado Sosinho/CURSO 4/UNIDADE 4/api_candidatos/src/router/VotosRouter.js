import {Router} from "express";
import * as VotosController from "../controller/VotosController.js";
import EleitorMiddleware from "../middlewares/authorization/RotaEleitor.js";

const router = Router();

router
    .post('/', EleitorMiddleware, VotosController.inserirVoto);

export default router;