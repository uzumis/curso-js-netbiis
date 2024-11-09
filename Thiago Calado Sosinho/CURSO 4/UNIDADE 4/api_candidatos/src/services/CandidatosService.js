import * as CandidatosRepository from "../repositories/CandidatosRepository.js"

export async function listarCandidatos() {
    return await CandidatosRepository.listarCandidatos();
}

export async function buscarCandidato(id) {
    return await CandidatosRepository.buscarCandidato(id);
}

export async function obterCandidato(id, eleicaoId) {
    const res = await CandidatosRepository.obterCandidato(id, eleicaoId);
    return res;
}

export async function buscarCandidatoPeloNumero(id) {
    return await CandidatosRepository.listarCandidatosPorEleicao(id);
}

export function criarCandidato(candidato) {
    return CandidatosRepository.criarCandidato(candidato);
}

export function atualizarCandidato(candidato) {
    return CandidatosRepository.atualizarCandidato(candidato)
}

export async function deletarCandidato(id) {
    return CandidatosRepository.deletarCandidato(id);
}
