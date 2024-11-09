import Joi from 'joi';

export const CandidatoValidator = Joi.object({
    nome: Joi.string().required(),
    numero: Joi.number().integer().required(),  
    partido: Joi.string().required(),       
    foto: Joi.string().uri().optional(),        
    votos: Joi.number().integer().min(0).default(0) 
});
