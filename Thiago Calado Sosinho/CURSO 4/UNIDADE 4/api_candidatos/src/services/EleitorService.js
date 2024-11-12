import AppError from "../errors/AppError.js";
import * as EleitorRepository from "../repositories/EleitorRepository.js"
import bcrypt from 'bcrypt';

const {compareSync, hash} = bcrypt;

export async function listarEleitores() {
    return await EleitorRepository.listarEleitores();
}

export async function obterEleitor(id) {
    return await EleitorRepository.obterEleitor(id);
}

export async function criarEleitor(loginReq) {
    // Verifica se o CPF já está cadastrado
    const eleitorExistente = await EleitorRepository.obterEleitorPorCpf(loginReq.cpf);
    if (eleitorExistente) {
        throw new AppError('CPF já cadastrado', 400);
    }

    // Cria um novo objeto eleitor com os dados do loginReq
    const hashSenha = await hash(loginReq.senha, 10);
    const eleitor = {
        nome: loginReq.nome,
        cpf: loginReq.cpf,
        senha: hashSenha
    };

    // Salva o novo eleitor no banco de dados
    const result = await EleitorRepository.criarEleitor(eleitor);
    return result;
}

export async function login(loginReq){
    const eleitor = await EleitorRepository.obterEleitorPorCpf(loginReq.cpf);
    if (!eleitor){
        throw new AppError ('CPF ou senha incorretos', 400);
    }
    const senhaCorreta = compareSync(loginReq.senha, eleitor.senha);
    if (!senhaCorreta){
        throw new AppError('CPF ou senha incorretos', 400);
    }
    return {id: eleitor.id, nome: eleitor.nome, cpf: eleitor.cpf}
}

export function atualizarEleitor(candidato) {
    return EleitorRepository.atualizarEleitor(candidato)
}


export async function atualizarSenha({ id, senhaAtual, novaSenha }) {
    const eleitor = await EleitorRepository.obterEleitor(id);
    if (!eleitor) {
        throw new AppError('Eleitor não encontrado', 404);
    }
    const senhaCorreta = compareSync(senhaAtual, eleitor.senha);
    if (!senhaCorreta) {
        throw new AppError('Senha atual incorreta', 400);
    }
    const senhaCriptografada = await hash(novaSenha, 10);
    await EleitorRepository.atualizarSenha({
        id: eleitor.id,
        senha: senhaCriptografada
    });
    return { message: 'Senha atualizada com sucesso' };
}


export function deletarEleitor(id) {
    return EleitorRepository.deletarEleitor(id);
}
