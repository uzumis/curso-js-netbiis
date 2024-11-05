import express from "express";

const app = express();

app.use(express.json());

const candidatos = [];


app.get('/candidatos', (req, res) => {
    res.send(candidatos);
});

app.get('/candidatos/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Candidato ${candidatos}`);
});


app.get('/candidatos', (req, res) => {
    const numero = req.query.numero;
    res.json(`Candidato ${numero}`);
});


app.post('/candidatos', (req, res) => {
    const {id, nome, numero, partido, foto } = req.body; 
    
    const newCandidato = {
        id,
        nome,
        numero,
        partido,
        foto,
        votos: 0
    };

    candidatos.push(newCandidato);
    res.status(201).json(newCandidato); 
});

app.put('/candidatos/:id', (req,res)=>{
	console.log(req.headers);
	res.header('Content-Type', 'application/json');
	res.send({message:'Candidato '+req.params.id+' atualizado'});
})

app.delete('/candidatos/:id', (req, res) => { 
    const id = parseInt(req.params.id, 10);
    const index = candidatos.findIndex(c => c.id === id); 
    if (index === -1) {
        return res.status(404).json({ error: 'Candidato não encontrado' });
    }
    candidatos.splice(index, 1);
    res.json({ message: `Candidato ${id} eliminado com sucesso` });
});

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


app.listen(3000,()=>{
	console.log("Servidor rodando na porta 3000");
});