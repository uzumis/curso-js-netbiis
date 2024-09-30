let candidatos = [
    { nome: 'Eder Mauro', numero: 22, votos: '0', foto: "./resources/candidatos/edermauro.jpeg" },
    { nome: 'Edmilson Rodrigues', numero: 50, votos: '0', foto: "./resources/candidatos/edmilson.png" },
    { nome: 'Tiago Araujo', numero: 10, votos: '0', foto: "./resources/candidatos/thiagoaraujo.jpg" },
    { nome: 'Igor Normando', numero: 15, votos: '0', foto: "./resources/candidatos/igornormando.jpg" },
]
let checkVote = document.getElementById('check-vote');
let inputVote = document.getElementById('num');
let validation = document.getElementById('validate');
let branco = document.getElementById('votos-brancos');
let nulo = document.getElementById('votos-nulos');
let brancoCount = 0;
let nullCount = 0;
const buttonHtml = `<div class="button__container">

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
const CHECK_BUTTONS = document.getElementById('button-check');
const UL_CANDIDATOS = document.getElementById('candidatos'); 

function renderCandidates() {
    CHECK_BUTTONS.innerHTML = `${buttonHtml}`;
    UL_CANDIDATOS.innerHTML = '';
    candidatos.sort((a, b) => b.votos - a.votos);
    candidatos.forEach((candidato => {
        UL_CANDIDATOS.innerHTML += `
         <li>
                <span class="nome-candidato">${candidato.nome} - ${candidato.numero}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
            </li>
        `
    }))
    brancoNuloinit();
    
}

function brancoNuloinit(){
    let BRANCO = document.getElementById('voto-branco');
    let CORRIGE = document.getElementById('voto-corrige');
    let CONFIRMA = document.getElementById('confirma-voto');
    
    BRANCO.addEventListener('click',function(){
        brancoCount++;
        branco.innerText = brancoCount;
        validation.innerHTML = `<h1> VOCE VOTOU EM BRANCO <h1>`;
        brancoNuloinit();
    }); 

    CORRIGE.addEventListener('click',function(){
        inputVote.value = ``;
        validation.innerHTML = `${buttonHtml}`;
        brancoNuloinit();
    });

    CONFIRMA.addEventListener('click',function(){
        if (isNaN(inputVote.value) || !inputVote.value){
            alert('Voce precisa digitar o numero do seu candidato');
            brancoNuloinit();
        }
    });
}

function votaCandidato(nomeCandidato) {
    const CANDIDATO_INDEX = candidatos.findIndex(el => el.nome == nomeCandidato);
    console.log(CANDIDATO_INDEX);
}

function checkCandidato(numeroCandidato) {
    if (numeroCandidato == 1558861) {
        OI();
    } else if (isNaN(numeroCandidato)) {
        validation.innerHTML = `${buttonHtml}`;
        brancoNuloinit();
    } else {
        const CANDIDATO_INDEX = candidatos.findIndex(el => el.numero === numeroCandidato);
        console.log(CANDIDATO_INDEX);
        if (CANDIDATO_INDEX == -1){
            validation.innerHTML = `
            <h1> VOTO NULO </h1>
            ${buttonHtml}`
        }else{
            validation.innerHTML = `
            <div id="candidate-photo-container">
                <img class = 'candidate__photo' id="candidate-photo" src="${candidatos[CANDIDATO_INDEX].foto}" alt="${candidatos[CANDIDATO_INDEX].nome}" />
            </div>
            <br>
            <h1> ${candidatos[CANDIDATO_INDEX].nome} - ${candidatos[CANDIDATO_INDEX].numero}</h1>
            ${buttonHtml}`
        }
        const CONFIRMA = document.getElementById('confirma-voto');

        CONFIRMA.addEventListener('click',function(){
            if (CANDIDATO_INDEX == -1){
                nullCount++;
                nulo.innerText = nullCount;
                validation.innerHTML = `<h1> VOTO ANULADO <h1>`
            }else{
                console.log(`voto`);
                console.log(CANDIDATO_INDEX);
                candidatos[CANDIDATO_INDEX].votos++;
                validation.innerHTML = `<h1> FIM <h1>`
                renderCandidates();
            }
        }); 
        brancoNuloinit();
    }
}

inputVote.addEventListener('input', function (event) {
    event.preventDefault();
    console.log(inputVote.value);
    checkCandidato(parseInt(inputVote.value));

});

function votaCandidato(numeroCandidato){
    const CANDIDATO_INDEX = candidatos.findIndex(el => el.numero === numeroCandidato);
    candidatos[CANDIDATO_INDEX].votos++;
    renderCandidates();
 }

renderCandidates();

































function OI() {
    validation.innerHTML = `
    <div id="candidate-photo-container">
        <img class = 'candidate__photo' id="candidate-photo" src="./resources/candidatos/---.jpg" alt="???" />
     </div>
    <br>
    <h1> VOCE LIBEROU O AKUMA</h1>\
`
}