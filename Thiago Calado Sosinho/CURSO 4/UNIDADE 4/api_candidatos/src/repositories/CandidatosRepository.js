import pool from "../config/dbConfig.js";


export async function listarCandidatos(){
   const result = await pool.query('SELECT * FROM candidato');
   return result.rows;
}
	
export async function buscarCandidatoPeloNumero(id){
    let result = await pool.query ('SELECT * FROM candidato WHERE id = $1', [id]);
    return result.rows[0] ?? false;
   }

export async function criarCandidato(candidato) {
   const { nome, numero, partido } = candidato;
   try {
      const result = await pool.query(
         'INSERT INTO candidato (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *',
         [nome, numero, partido]
      );
      return result.rows[0];
   } catch (error) {
      console.error("Error inserting candidate:", error);
      return false;
   }
}
  

export async function atualizarCandidato(candidato) {
   if (!candidato) {
      throw new Error("The 'candidato' object is undefined or null.");
   }
   
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
