import AppError from "../errors/AppError.js";
import * as EleitorRepository from "../repositories/EleitorRepository.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const {compareSync, hash} = bcrypt;

export async function listarEleitores() {
    return await EleitorRepository.listarEleitores();
}

export async function obterEleitor(id) {
    return await EleitorRepository.obterEleitor(id);
}

export async function criarEleitor(loginReq) {
    const eleitorExistente = await EleitorRepository.obterEleitorPorCpf(loginReq.cpf);
    if (eleitorExistente) {
        throw new AppError('CPF já cadastrado', 400);
    }
    const hashSenha = await hash(loginReq.senha, 10);
    const eleitor = {
        nome: loginReq.nome,
        cpf: loginReq.cpf,
        senha: hashSenha
    };
    const result = await EleitorRepository.criarEleitor(eleitor);
    return result;
}

export async function login(loginReq){
    const eleitor = await EleitorRepository.obterEleitorPorCpf(loginReq.cpf);
    if (!eleitor){
        throw new AppError ('CPF ou senha incorretos', 401);
    }
    const senhaCorreta = compareSync(loginReq.senha, eleitor.senha);
    if (!senhaCorreta){
        throw new AppError('CPF ou senha incorretos', 401);
    }
    let token = generateToken({id: eleitor.id, nome:eleitor.nome, cpf:eleitor.cpf, perfil:eleitor.perfil});
    return ({token:token});
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

export function atualizarPerfilEleitor({ id, perfil }) {
    return EleitorRepository.atualizarPerfilEleitor(parseInt(id, 10), perfil);
}


function generateToken(data){
    return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '1h'})
}