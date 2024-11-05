import {JSONFilePreset} from 'lowdb/node';

const PATH = 'candidatesdb.json';

const defautData = {
    candidatos: []
}

const db = await JSONFilePreset(PATH, defautData);
console.log(db);

export default db