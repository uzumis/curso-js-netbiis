import { EleicoesValidator } from "../validators/EleicoesValidator.js";
import * as EleicoesService from "../services/EleicoesService.js";

export async function listarEleicoes(req, res) {
    const candidatos = await EleicoesService.listarEleicoes();
    return res.send(candidatos);
}

export async function obterEleicao(req, res) {
    const id = req.params.id;
    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send('Eleicao invalido');
    }
    const Eleicao = await EleicoesService.obterEleicao(id);
    if (!Eleicao) {
        res.status(404).send('Eleicao nao encontrado');
        return;
    }
    res.send(Eleicao);

}

export async function criarEleicao(req, res) {
    const body = req.body;
    const validacao = EleicoesValidator.validate(body);

    if (validacao.error) {
        res.status(400).send({ message: validacao.error.details[0].message })
    }

    await EleicoesService.criarEleicao(body);

    res.status(201).json('Eleicao criado');
}

export async function atualizarEleicao(req, res) {
    const body = req.body;
    const validacao = EleicoesValidator.validate(body);
    if (validacao.error) {
        res.status(400).send({ message: validacao.error.details[0].message });
    }
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
