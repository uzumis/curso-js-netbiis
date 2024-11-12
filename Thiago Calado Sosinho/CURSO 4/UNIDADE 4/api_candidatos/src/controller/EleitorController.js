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

export async function criarEleitor(req, res, next) {
    try {
        const body = req.body;
        await EleitorService.criarEleitor(body);
        res.status(201).json('Eleitor criado');
    } catch (error) {
        next(error);
    }
}

export async  function login(req, res, next){
    try{
        const result = await EleitorService.login(req.body);
        res.send(result);
    } catch(error){
        next(error)
    }
}

export async function atualizarEleitor(req, res) {
    const body = req.body;
    body.id = req.params.id;
    await EleitorService.atualizarEleitor(body);
    res.send({ message: "Eleitor " + req.params.id + " atualizado" });
}

export async function atualizarSenha(req,res, next){
    try{
        const body = req.body;
        body.id = req.params.id;
        const result = await EleitorService.atualizarSenha(body);
        res.send(result);
    }catch(error){
        next(error)
    }

}

export async function deletarEleitor(req, res) {
    const { id } = req.params;
        await EleitorService.deletarEleitor(id);
        res.status(200).send({ message: `Eleitor ${id} deletado com sucesso.` });
    
}
