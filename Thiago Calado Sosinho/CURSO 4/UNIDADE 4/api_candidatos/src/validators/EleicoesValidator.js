import Joi from 'joi';

export const EleicoesValidator = Joi.object({
    nome: Joi.string().required(),
    data: Joi.date().required(),  
    partido: Joi.string().required(),       
});
