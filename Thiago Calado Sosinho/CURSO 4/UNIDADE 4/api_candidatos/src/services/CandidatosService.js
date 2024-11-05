import * as CandidatosRepository from "../repositories/CandidatosRepository.js"

export async function listarCandidatos() {
    return await CandidatosRepository.listarCandidatos();
}

export async function buscarCandidatoPeloNumero(id) {
    return await CandidatosRepository.buscarCandidatoPeloNumero(id);
}

export function criarCandidato(candidato) {
    return CandidatosRepository.criarCandidato(candidato);
}

export function atualizarCandidato(candidato) {
    return CandidatosRepository.atualizarCandidato(candidato)
}

export function deletarCandidato(id) {
    return CandidatosRepository.deletarCandidato(id);
}
