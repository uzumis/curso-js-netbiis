import Joi from 'joi';
import * as EleitorService from '../services/EleitorService.js';

export const EleitorValidator = Joi.object({
    nome: Joi.string().required(),              // Nome deve ser uma string e obrigatório
    cpf: Joi.string().length(11).required(),    // CPF deve ser uma string com 11 caracteres
    senha: Joi.string().required()              
});


export const verificarEleitorExistente = async (req, res, next) => {
    const id = req.params.id;
    const candidato = await EleitorService.obterEleitor(id);
    if (!candidato) {
        return res.status(404).json({ error: 'Eleitor não encontrada' });
    }
    req.candidato = candidato; 
    next();
};
