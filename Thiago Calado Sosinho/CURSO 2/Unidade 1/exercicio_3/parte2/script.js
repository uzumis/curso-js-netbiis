let candidatos = [
    { nome: 'Eder Mauro', numero: 22, votos: 0, foto: "./resources/candidatos/edermauro.jpeg" },
    { nome: 'Edmilson Rodrigues', numero: 50, votos: 0, foto: "./resources/candidatos/edmilson.png" },
    { nome: 'Tiago Araujo', numero: 10, votos: 0, foto: "./resources/candidatos/thiagoaraujo.jpg" },
    { nome: 'Igor Normando', numero: 15, votos: 0, foto: "./resources/candidatos/igornormando.jpg" },
];
let brancoCount = 0;
let nullCount = 0;

// Elementos do DOM
const inputVote = document.getElementById('num');
const validation = document.getElementById('validate');
const branco = document.getElementById('votos-brancos');
const nulo = document.getElementById('votos-nulos');
const UL_CANDIDATOS = document.getElementById('candidatos');

// Renderizar candidatos
function renderCandidates() {
    UL_CANDIDATOS.innerHTML = '';
    candidatos.sort((a, b) => b.votos - a.votos);
    candidatos.forEach(candidato => {
        UL_CANDIDATOS.innerHTML += `
            <li>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
            </li>`;
    });
}

// Configurar botões (função única)
function configureButtons() {
    const BRANCO = document.getElementById('voto-branco');
    const CORRIGE = document.getElementById('voto-corrige');
    const CONFIRMA = document.getElementById('confirma-voto');

    // Voto em branco
    BRANCO.addEventListener('click', function () {
        brancoCount++;
        branco.innerText = brancoCount;
        validation.innerHTML = `<h1> VOCÊ VOTOU EM BRANCO </h1>`;
    });

    // Corrigir voto
    CORRIGE.addEventListener('click', function () {
        inputVote.value = ``;
        validation.innerHTML = renderButtons(); // Apenas renderiza os botões novamente
    });

    // Confirmar voto
    CONFIRMA.addEventListener('click', function () {
        handleVote();
    });
}

// Função de renderização dos botões
function renderButtons() {
    return `
        <div class="button__container">
            <div class="urna-input-group">
                <button id="voto-branco" class="btn-branco">Branco</button>
            </div>
            <div class="urna-input-group">
                <button id="voto-corrige" class="btn-corrige">Corrige</button>
            </div>
            <div class="urna-input-group">
                <button id="confirma-voto" class="btn-votar">Confirma</button>
            </div>
        </div>`;
}

// Função para validar e computar o voto
function handleVote() {
    const numeroCandidato = parseInt(inputVote.value);
    
    if (isNaN(numeroCandidato)) {
        alert('Você precisa digitar um número válido.');
        validation.innerHTML = renderButtons();
        configureButtons();
        return;
    }

    const CANDIDATO_INDEX = candidatos.findIndex(el => el.numero === numeroCandidato);

    if (CANDIDATO_INDEX === -1) {
        // Voto nulo
        nullCount++;
        nulo.innerText = nullCount;
        validation.innerHTML = `<h1> VOTO NULO </h1>${renderButtons()}`;
    } else {
        // Voto válido
        candidatos[CANDIDATO_INDEX].votos++;
        validation.innerHTML = `<h1> ${candidatos[CANDIDATO_INDEX].nome} recebeu seu voto! </h1>${renderButtons()}`;
    }
    
    renderCandidates();  // Atualiza a lista de candidatos
    configureButtons();  // Reconfigura os botões após o voto
}

// Listener para entrada de número de candidato
inputVote.addEventListener('input', function (event) {
    event.preventDefault();
    const numero = parseInt(inputVote.value);
    checkCandidato(numero);
});

// Função para verificar o candidato e renderizar suas informações
function checkCandidato(numeroCandidato) {
    if (isNaN(numeroCandidato)) {
        validation.innerHTML = renderButtons();
    } else {
        const CANDIDATO_INDEX = candidatos.findIndex(el => el.numero === numeroCandidato);
        
        if (CANDIDATO_INDEX === -1) {
            validation.innerHTML = `<h1> VOTO NULO </h1>${renderButtons()}`;
        } else {
            validation.innerHTML = `
                <div id="candidate-photo-container">
                    <img class='candidate__photo' src="${candidatos[CANDIDATO_INDEX].foto}" alt="${candidatos[CANDIDATO_INDEX].nome}" />
                </div>
                <h1> ${candidatos[CANDIDATO_INDEX].nome} </h1>
                ${renderButtons()}`;
        }
    }
    configureButtons();  // Reconfigura os botões a cada verificação
}

// Função especial (Easter egg)
function OI() {
    validation.innerHTML = `
    <div id="candidate-photo-container">
        <img class='candidate__photo' src="./resources/candidatos/---.jpg" alt="???" />
    </div>
    <h1> VOCÊ LIBEROU O AKUMA! </h1>`;
}

// Inicialização
renderCandidates();
configureButtons();  // Configura os botões na primeira execução
