import { EleitorValidator } from "../validators/EleitorValidator.js";
import * as EleitorService from "../services/EleitorService.js";

export async function listarEleitores(req, res) {
    const candidatos = await EleitorService.listarEleitores();
    return res.send(candidatos);
}

export async function obterEleitor(req, res) {
    const id = req.params.id;
    const Eleitor = await EleitorService.obterEleitor(id);
    res.send(Eleitor);
}

export async function criarEleitor(req, res) {
    const body = req.body;
    await EleitorService.criarEleitor(body);
    res.status(201).json('Eleitor criado');
}

export async function atualizarEleitor(req, res) {
    const body = req.body;
    body.id = req.params.id;
    await EleitorService.atualizarEleitor(body);
    res.send({ message: "Eleitor " + req.params.id + " atualizado" });
}

export async function deletarEleitor(req, res) {
    const { id } = req.params;
        await EleitorService.deletarEleitor(id);
        res.status(200).send({ message: `Eleitor ${id} deletado com sucesso.` });
    
}
