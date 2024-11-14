import pool from "../config/dbConfig.js";


export async function listarEleicoes(){
   const result = await pool.query('SELECT * FROM eleicao');
   return result.rows;
}
	
export async function obterEleicao(id){
    let result = await pool.query ('SELECT * FROM eleicao WHERE id = $1', [id]);
    return result.rows[0] ?? false;
   }

export async function resumoEleicao(id) {
   const result = await pool.query('SELECT * FROM vw_apuracao_final WHERE eleicao_id = $1', [id]);
   return result.rows;
}

export async function criarEleicao(eleicao) {
   const { nome, data, descricao } = eleicao;
   try {
      const result = await pool.query(
         'INSERT INTO eleicao (nome, data, descricao) VALUES ($1, $2, $3) RETURNING *',
         [nome, data, descricao]
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
   
   const { nome, data, descricao, id } = eleicao;
   
   const result = await pool.query(
      'UPDATE eleicao SET nome = $1, data = $2, descricao = $3 WHERE id = $4 RETURNING *',
      [nome, data, descricao, id]
   );
   
   return result.rows[0];
}

export async function deletarEleicao(id){
   await pool.query('DELETE FROM eleicao WHERE id = $1', [id]);
}
