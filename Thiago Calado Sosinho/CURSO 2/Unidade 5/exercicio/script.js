import * as api from './api.js';

async function buscarUsuario() {
    const username = document.getElementById('username').value;
    api.getPosts(username).then(posts => {
        document.getElementById('name').textContent = `${posts.name}`;
        document.getElementById('avatar').src = `${posts.avatar_url}`;
        document.getElementById('bio').textContent = `${posts.bio}`;
        document.getElementById('repos').textContent = `${posts.public_repos}`;
        document.getElementById('followers').textContent = `${posts.followers}`;
        document.getElementById('following').textContent = `${posts.following}`;
    }).catch(error => {
        console.error("Erro ao buscar usuário:", error);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const buscarBtn = document.querySelector('button');
    buscarBtn.addEventListener('click', buscarUsuario);
});