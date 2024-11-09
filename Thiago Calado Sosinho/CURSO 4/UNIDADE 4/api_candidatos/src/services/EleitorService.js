import * as EleitorRepository from "../repositories/EleitorRepository.js"

export async function listarEleitores() {
    return await EleitorRepository.listarEleitores();
}

export async function obterEleitor(id) {
    return await EleitorRepository.obterEleitor(id);
}

export function criarEleitor(candidato) {
    return EleitorRepository.criarEleitor(candidato);
}

export function atualizarEleitor(candidato) {
    return EleitorRepository.atualizarEleitor(candidato)
}

export function deletarEleitor(id) {
    return EleitorRepository.deletarEleitor(id);
}
