import * as EleicoesRepository from "../repositories/EleicoesRepository.js"
import * as candidatoEleicaoRepository from '../repositories/CandidatosEleicaoRepository.js';
import * as candidatosService from './CandidatosService.js';
export async function listarEleicoes() {
    return await EleicoesRepository.listarEleicoes();
}

export async function obterEleicao(id) {
    return await EleicoesRepository.obterEleicao(id);
}
export async function resumoEleicao(id){
    const res = await EleicoesRepository.obterEleicao(id);
    res.votos = await EleicoesRepository.resumoEleicao(id);
    res.votos = res.votos.map(el=>{
        return {
            id: el.id,
            nome:el.nome,
            votos: parseInt(el.votos)
        }
    }).sort((a,b) => b.votos - a.votos);
    return res;
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

export async function adicionarCandidatoEleicao(candidatoId, eleicaoId) {
    const referencia = await candidatoEleicaoRepository.buscarReferencia(candidatoId, eleicaoId);
    const candidato = await candidatosService.obterCandidato(candidatoId);
    if (!candidato) {
        throw new AppError("Candidato não encontrado", 404);
    }
    if (referencia) {
        throw new AppError("Candidato já cadastrado na eleição", 400);
    }
    const result = await candidatoEleicaoRepository.adicionarCandidatoEleicao(candidatoId, eleicaoId);
    return result;
}

export async function removerCandidatoEleicao(candidatoId, eleicaoId) {
    return await candidatoEleicaoRepository.removerCandidatoEleicao(candidatoId, eleicaoId);
}