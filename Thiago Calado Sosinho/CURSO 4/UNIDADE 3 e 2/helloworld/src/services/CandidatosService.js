import * as CandidatosRepository from "../repositories/CandidatosRepository.js"

export function listarCandidatos() {
    return CandidatosRepository.listarCandidatos();
}

export function buscarCandidatoPeloNumero(id) {
    return CandidatosRepository.buscarCandidatoPeloNumero(id);
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
