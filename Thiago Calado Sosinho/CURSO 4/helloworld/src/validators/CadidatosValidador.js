import Joi from 'joi';

export const CandidatoValidator = Joi.object({
    id: Joi.required(),  
    nome: Joi.string().required(),
    numero: Joi.number().integer().required(),  
    partido: Joi.string().required(),       
    foto: Joi.string().uri().optional(),        
    votos: Joi.number().integer().min(0).default(0) 
});

const body = {
    id: "123",              
    nome: "Maria Silva",     
    numero: 45,               
    partido: "ABC",         
    foto: "http://example.com/photo.jpg", 
    votos: 0                  
};
