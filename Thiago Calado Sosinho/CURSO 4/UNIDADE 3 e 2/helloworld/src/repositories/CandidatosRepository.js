import db from "../config/dbCandidates.js";


export function listarCandidatos(){
    return db.data.candidatos;
}
	
export function buscarCandidatoPeloNumero(id){
    return db.data.candidatos.find(candidato=> candidato.id == id);
}

export function criarCandidato(candidato){
    console.log(candidato);
    db.data.candidatos.push(candidato);
    db.write();
    return true;
}

export function atualizarCandidato(candidato){
   const index = db.data.candidatos.findIndex(a=> a.id == candidato.id);
   db.data.candidatos[index] = candidato;
   db.write();
   return true;
}

export function deletarCandidato(id){
    const index = db.data.candidatos.findIndex(a => a.id == id);
    db.data.candidatos.splice(index,1);
    db.write();
    return true;
}
