import {JSONFilePreset} from 'lowdb/node';

const defautData = {
    alunos: []
}

const db = await JSONFilePreset('db.json', defautData)
export default db