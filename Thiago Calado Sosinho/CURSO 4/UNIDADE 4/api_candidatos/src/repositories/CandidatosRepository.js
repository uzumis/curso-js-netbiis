import pool from "../config/dbConfig.js";

export async function listarCandidatos(){
   const result = await pool.query('SELECT * FROM candidato');
   return result.rows;
}

export async function buscarCandidato(id){
   const result = await pool.query('SELECT * from candidato where id = $1', [id]);
   return result.rows;
}

export async function listarCandidatosPorEleicao(eleicaoId){
   const result = await pool.query('SELECT * FROM vw_candidato_eleicao WHERE eleicao_id = $1', [eleicaoId]);
   return result.rows;
}

export async function obterCandidato(id, eleicaoId){
   const result = await pool.query('SELECT * FROM vw_candidato_eleicao WHERE eleicao_id = $1 AND eleicao_id=$2', [id,eleicaoId]);
   return result.rows;
}
	
export async function buscarCandidatoPeloNumero(numero, eleicaoId) {
   let result = await pool.query('SELECT * FROM vw_candidato_eleicao WHERE numero = $1 AND eleicao_id =$2', [numero, eleicaoId]);
   return result.rows[0] ?? false;
}

export async function criarCandidato(candidato) {
   const { nome, numero, partido } = candidato;
   const result = await pool.query(
      'INSERT INTO candidato (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *',
      [nome, numero, partido]
   );
   return result.rows[0];
}
  
export async function atualizarCandidato(candidato) {
   const { nome, numero, partido, id } = candidato;
   const result = await pool.query(
      'UPDATE candidato SET nome = $1, numero = $2, partido = $3 WHERE id = $4 RETURNING *',
      [nome, numero, partido, id]
   );
   return result.rows[0];
}

export async function deletarCandidato(id){
   await pool.query('DELETE FROM candidato WHERE id = $1', [id]);
}
