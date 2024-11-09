import * as CandidatosRepository from "../repositories/CandidatosRepository.js"

export async function listarCandidatos() {
    return await CandidatosRepository.listarCandidatos();
}

export async function buscarCandidato(id) {
    const candidato = await CandidatosRepository.buscarCandidato(id);
    if (candidato.length == 0) {
        throw new Error("Candidato não encontrado");
    }
    return await CandidatosRepository.buscarCandidato(id);
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
    const candidato = await CandidatosRepository.buscarCandidato(id);
    if (candidato.length == 0) {
        throw new Error("Candidato não encontrado");
    }
    return CandidatosRepository.deletarCandidato(id);
}
