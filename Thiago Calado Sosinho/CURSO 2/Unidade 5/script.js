import * as api from './api.js';

api.getPosts().then(posts=>{
    console.log(posts);
})