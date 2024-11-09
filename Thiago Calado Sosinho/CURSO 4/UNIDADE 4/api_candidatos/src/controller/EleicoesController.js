import { EleicoesValidator } from "../validators/EleicoesValidator.js";
import * as EleicoesService from "../services/EleicoesService.js";

export async function listarEleicoes(req, res) {
    const eleicao = await EleicoesService.listarEleicoes();
    return res.send(eleicao);
}

export async function obterEleicao(req, res) {
    const id = req.params.id;
    const Eleicao = await EleicoesService.obterEleicao(id);
    if (!Eleicao) {
        res.status(404).send('Eleicao nao encontrado');
        return;
    }
    res.send(Eleicao);
}

export async function resumoEleicao(req, res) {
    const id = req.params.id;
    const eleicao = await EleicoesService.resumoEleicao(id);
    return res.send(eleicao);
}

export async function adicionarCandidatoEleicao(req, res, next) {
    try {
        const result = await EleicoesService.adicionarCandidatoEleicao(req.body.idCandidato, req.body.idEleicao);
        res.send(result);

    } catch (error) {
        next(error)
    }
}

export async function criarEleicao(req, res) {
    const body = req.body;
    await EleicoesService.criarEleicao(body);
    res.status(201).json('Eleicao criado');
}

export async function atualizarEleicao(req, res) {
    const body = req.body;
    body.id = req.params.id;
    await EleicoesService.atualizarEleicao(body);
    res.send({ message: "Eleicao " + req.params.id + " atualizado" });
}

export async function deletarEleicao(req, res) {
    const { id } = req.params;

    try {
        await EleicoesService.deletarEleicao(id);
        res.status(200).send({ message: `Eleicao ${id} deletado com sucesso.` });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao deletar o Eleicao.', error: error.message });
    }
}


export async function removerCandidatoEleicao(req, res) {
    await eleicoesService.removerCandidatoEleicao(req.body.idCandidato, req.body.idEleicao);
    res.send({ message: 'Candidato removido da eleição' });
}