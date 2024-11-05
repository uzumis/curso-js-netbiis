import { CandidatoValidator } from "../validators/CadidatosValidador.js";
import * as CandidatosService from "../services/CandidatosService.js";

export function listarCandidatos(req, res){
    const candidatos = CandidatosService.listarCandidatos();
    res.send(candidatos);
 }
     
 export function buscarCandidatoPeloNumero(req,res){
    const id = req.params.id;
    if (parseInt(id)<=0 || isNaN(parseInt(id))){
        res.status(400).send('Candidato invalido');
    }
    const candidato = CandidatosService.buscarCandidatoPeloNumero(id);
    res.send(`Candidato ${candidato}`);
 }
 
export function criarCandidato(req, res) {
    const body = req.body;
    const validacao = CandidatoValidator.validate(body);
    
    if (validacao.error) {
        res.status(400).send({ message: validacao.error.details[0].message })
    }

    CandidatosService.criarCandidato(body);

    res.status(201).json('Candidato criado');
}
 
 export function atualizarCandidato(req, res){
	const body = req.body;
	const validacao = CandidatoValidator.validate(body);
	if (validate.error){
		res.status(400).send({message: validacao.error.details[0].message});
	}
	body.id = req.params.id;
	CandidatosService.atualzarAluno(body);
	res.send({message: "Candidato" +req.params.id+" atualizado"});
 }
 
 export function deletarCandidato(req, res){
	const id = req.params.id;
	if (parseInt(id)<= 0 || isNaN(parseInt(id))){
		res.status(400).send('Id invalido');
	}
	CandidatosService.deletarCandidato(id);
	res.send('Candidato deletado');
 }

