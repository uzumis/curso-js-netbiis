import * as CandidatosService from "../services/CandidatosService.js";

export async function listarCandidatos(req, res) {
    if (req.query.numero){
        const candidatos = await CandidatosService.obterCandidatoPorNumero(req.query.numero, req.query.eleicaoId);
        return res.send(candidatos);
    }
   console.log(req.query.eleicaoId);
   const candidatos = await CandidatosService.listarCandidatos(req.query.eleicaoId);
   return res.send(candidatos);
}

export async function buscarCandidatoPeloNumero(req, res) {
    const candidato = await CandidatosService.buscarCandidatoPeloNumero(req.params.id, req.query.eleicaoId);
    res.send(candidato);
}

export async function buscarCandidato(req, res) {
    const candidato = await CandidatosService.buscarCandidato(req.params.id);
    res.send(candidato);
}

export async function criarCandidato(req, res) {
    const body = req.body;
    await CandidatosService.criarCandidato(body);
    res.status(201).json('Candidato criado');
}

export async function atualizarCandidato(req, res) {
    const body = req.body;
    body.id = req.params.id;
    await CandidatosService.atualizarCandidato(body);
    res.send({ message: "Candidato " + req.params.id + " atualizado" });
}

export async function deletarCandidato(req, res) {
    const id = req.params.id;
    await CandidatosService.deletarCandidato(id);
    res.status(200).send({ message: `Candidato ${id} deletado com sucesso.` });
}
