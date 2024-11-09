
import * as votosService from '../services/VotosService.js';

export async function inserirVoto(req, res) {
    const body = req.body;
    const result = await votosService.inserirVoto(body);
    res.send(result);
}
