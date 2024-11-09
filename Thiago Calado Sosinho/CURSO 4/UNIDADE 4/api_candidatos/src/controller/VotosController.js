
import * as votosService from '../services/VotosService.js';

export async function inserirVoto(req, res) {
    const body = req.body;
    const result = await votosService.inserirVoto(body);
    if (!result) {
        return res.status(400).send({ message: 'Eleitor já votou' });
    }

    res.send(result);
}
