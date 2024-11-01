SELECT 
    eleicoes.id AS eleicoes_id,
    eleicoes.nome AS eleicoes,
    eleicoes.data_fim AS data,
    candidato.nome AS candidato_nome,
	candidato.partido AS partido,
	candidato.numero AS numero
FROM 
    eleicoes_candidatos
JOIN 
    eleicoes ON eleicoes_candidatos.eleicao_id = eleicoes.id
JOIN 
    candidato ON eleicoes_candidatos.candidato_id = candidato.id;
	
SELECT * from v_eleicoes_candidatos

SELECT 
    ec.candidato_id,              
    ec.eleicao_id,                
    COUNT(v.id) AS quantidade_votos 
FROM 
    eleicoes_candidatos ec
LEFT JOIN 
    voto v ON ec.candidato_id = v.candidato_id AND ec.eleicao_id = v.eleicao_id 
GROUP BY 
    ec.candidato_id, 
    ec.eleicao_id               
ORDER BY 
    ec.eleicao_id, 
    quantidade_votos DESC;       
