import Joi from 'joi';
import * as EleicoesService from '../services/EleicoesService.js';

export const EleicoesValidator = Joi.object({
    nome: Joi.string().required(),
    data: Joi.date().required(),  
    descricao: Joi.string().required(),       
});


export const verificarEleicaoExistente = async (req, res, next) => {
    const id = req.params.id;
    const eleicao = await EleicoesService.obterEleicao(id);
    if (!eleicao) {
        return res.status(404).json({ error: 'Eleição não encontrada' });
    }
    req.eleicao = eleicao; 
    next();
};

