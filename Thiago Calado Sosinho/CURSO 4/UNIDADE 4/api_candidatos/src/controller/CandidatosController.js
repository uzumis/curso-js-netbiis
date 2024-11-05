import { CandidatoValidator } from "../validators/CadidatosValidador.js";
import * as CandidatosService from "../services/CandidatosService.js";

export async function listarCandidatos(req, res) {
    const candidatos = await CandidatosService.listarCandidatos();
    return res.send(candidatos);
}

export async function buscarCandidatoPeloNumero(req, res) {
    const id = req.params.id;
    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send('Candidato invalido');
    }
    const candidato = await CandidatosService.buscarCandidatoPeloNumero(id);
    if (!candidato) {
        res.status(404).send('Candidato nao encontrado');
        return;
    }
    res.send(candidato);

}

export async function criarCandidato(req, res) {
    const body = req.body;
    const validacao = CandidatoValidator.validate(body);

    if (validacao.error) {
        res.status(400).send({ message: validacao.error.details[0].message })
    }

    await CandidatosService.criarCandidato(body);

    res.status(201).json('Candidato criado');
}

export async function atualizarCandidato(req, res) {
    const body = req.body;
    const validacao = CandidatoValidator.validate(body);
    if (validacao.error) {
        res.status(400).send({ message: validacao.error.details[0].message });
    }
    body.id = req.params.id;
    await CandidatosService.atualizarCandidato(body);
    res.send({ message: "Candidato " + req.params.id + " atualizado" });
}

export async function deletarCandidato(req, res) {
    const { id } = req.params;

    try {
        await CandidatosService.deletarCandidato(id);
        res.status(200).send({ message: `Candidato ${id} deletado com sucesso.` });
    } catch (error) {
        res.status(500).send({ message: 'Erro ao deletar o candidato.', error: error.message });
    }
}
