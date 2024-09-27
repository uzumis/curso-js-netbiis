let candidatos = [
    {nome: 'Eder Mauro', votos: '0'},
    {nome: 'Edmilson Rodrigues', votos: '0'},
    {nome: 'Tiago Araujo', votos: '0'},
    {nome: 'Igor Normando', votos: '0'},
]
const UL_CANDIDATOS = document.getElementById('candidatos');''
function renderCandidates(){
    UL_CANDIDATOS.innerHTML = '';
    candidatos.sort((a,b) => b.votos - a.votos);
    candidatos.forEach((candidato => {
        UL_CANDIDATOS.innerHTML += `
         <li>
                <span class="nome-candidato">${candidato.nome}</span>
                <span class="votos-candidato">${candidato.votos} votos</span>
                <button class="btn-votar" onclick="votaCandidato('${candidato.nome}')">Votar</button>
            </li>
        `
    }))
}


function votaCandidato(nomeCandidato){
   const CANDIDATO_INDEX = candidatos.findIndex(el=>el.nome==nomeCandidato);
   candidatos[CANDIDATO_INDEX].votos++;
   renderCandidates();
}


renderCandidates();