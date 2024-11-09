import Joi from 'joi';
import * as CandidatosService from '../services/CandidatosService.js';

export const CandidatoValidator = Joi.object({
    nome: Joi.string().required(),
    numero: Joi.number().integer().required(),  
    partido: Joi.string().required(),       
    foto: Joi.string().uri().optional(),        
    votos: Joi.number().integer().min(0).default(0) 
});

export const verificarCandidatoExistente = async (req, res, next) => {
    const id = req.params.id;
    const candidato = await CandidatosService.buscarCandidato(id);
    if (!candidato) {
        return res.status(404).json({ error: 'Candidato não encontrada' });
    }
    req.candidato = candidato; 
    next();
};
