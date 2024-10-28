import { Router } from "express";

const router = Router();

const candidatos = [];

router.get('/', (req, res) => {
    res.send(candidatos);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Candidato ${id}`);
});


router.get('/', (req, res) => {
    const numero = req.query.numero;
    res.json(`Candidato ${numero}`);
});


router.post('/', (req, res) => {
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

router.put('/:id', (req,res)=>{
	console.log(req.headers);
	res.header('Content-Type', 'application/json');
	res.send({message:'Candidato '+req.params.id+' atualizado'});
})

router.delete('/:id', (req, res) => { 
    const id = parseInt(req.params.id, 10);
    const index = candidatos.findIndex(c => c.id === id); 
    if (index === -1) {
        return res.status(404).json({ error: 'Candidato não encontrado' });
    }
    candidatos.splice(index, 1);
    res.json({ message: `Candidato ${id} eliminado com sucesso` });
});

export default router;