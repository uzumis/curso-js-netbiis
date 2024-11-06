import * as EleicoesRepository from "../repositories/EleicoesRepository.js"

export async function listarEleicoes() {
    return await EleicoesRepository.listarEleicoes();
}

export async function obterEleicao(id) {
    return await EleicoesRepository.obterEleicao(id);
}

export function criarEleicao(candidato) {
    return EleicoesRepository.criarEleicao(candidato);
}

export function atualizarEleicao(candidato) {
    return EleicoesRepository.atualizarEleicao(candidato)
}

export function deletarEleicao(id) {
    return EleicoesRepository.deletarEleicao(id);
}
