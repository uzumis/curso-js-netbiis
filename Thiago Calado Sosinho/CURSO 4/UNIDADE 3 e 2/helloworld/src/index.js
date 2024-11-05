import express from "express";
import AppRouter from "./router/index.js";

const app = express();

app.use(express.json());

app.use('/', AppRouter);

app.use('/static', express.static('public'));

app.post('/votar', (req, res) => {
    const { numero } = req.body;
    if (!numero) {
        return res.status(400).json({ error: 'Número do candidato é obrigatório' }); 
    }
    const candidato = candidatos.find(c => c.numero === numero); 
    if (!candidato) {
        return res.status(404).json({ error: 'Candidato não encontrado' });
    }
    candidato.votos += 1;
    res.json({ message: `Voto registrado para o candidato ${candidato.nome}`, votos: candidato.votos });
});

app.listen(3000, () =>{
	console.log("Servidor escutando na porta 3000");
})