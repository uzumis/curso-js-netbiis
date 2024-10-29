import {JSONFilePreset} from 'lowdb/node';

const defautData = {
    candidatos: []
}

const db = await JSONFilePreset('../database/candidates.js', defautData)
export default db