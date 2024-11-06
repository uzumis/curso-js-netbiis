import pool from "../config/dbConfig.js";


export async function listarEleicoes(){
   const result = await pool.query('SELECT * FROM eleicao');
   return result.rows;
}
	
export async function obterEleicao(id){
    let result = await pool.query ('SELECT * FROM eleicao WHERE id = $1', [id]);
    return result.rows[0] ?? false;
   }

export async function criarEleicao(eleicao) {
   const { nome, numero, partido } = eleicao;
   try {
      const result = await pool.query(
         'INSERT INTO eleicao (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *',
         [nome, numero, partido]
      );
      return result.rows[0];
   } catch (error) {
      console.error("Error inserting candidate:", error);
      return false;
   }
}
  

export async function atualizarEleicao(eleicao) {
   if (!eleicao) {
      throw new Error("The 'eleicao' object is undefined or null.");
   }
   
   const { nome, numero, partido, id } = eleicao;
   
   const result = await pool.query(
      'UPDATE eleicao SET nome = $1, numero = $2, partido = $3 WHERE id = $4 RETURNING *',
      [nome, numero, partido, id]
   );
   
   return result.rows[0];
}



export async function deletarEleicao(id){
   await pool.query('DELETE FROM eleicao WHERE id = $1', [id]);
}
