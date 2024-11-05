import AlunosRouter from "./AlunosRouter.js";
import CandidatosRouter from "./CandidatosRouter.js";
import Joi from 'joi';
import {Router} from "express";

const router = Router();

router.get('/', (req,res)=>{
    let teste = Joi.assert(5, Joi.number());
    console.log(teste);
    res.send('Hello World');
})

router.use('/alunos', AlunosRouter);
router.use('/candidatos', CandidatosRouter);

export default router;