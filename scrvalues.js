var tscr1, tscr2, tscr3, tscr4, tscr5, tscr6, tscr7;
tscr1 = document.querySelector('#ua.tscr')

function pontos() {
    tscr1.textContent = 'PONTOS'
}


//scoreboard
// Define as pontuações padrão para cada equipe
const defaultScores = {
    "ua": 0,
    "ub": 0,
    "uc": 0,
    "da": 0,
    "db": 0,
    "ta": 0,
    "tb": 0
    // Adicione mais equipes conforme necessário
};

// Carrega as pontuações do armazenamento local, se existirem
Object.keys(defaultScores).forEach(teamId => {
    const score = localStorage.getItem(`${teamId}-score`);
    if (score !== null) {
        document.getElementById(`${teamId}-score`).textContent = score;
    }
});

updatePosition();

function updatePosition() {
    // Seleciona todas as equipes
    const teams = Array.from(document.querySelectorAll('.team.tm'));

    // Ordena as equipes com base no valor de tscr
    teams.sort((a, b) => {
        const scoreA = parseInt(a.querySelector('.tscr').textContent);
        const scoreB = parseInt(b.querySelector('.tscr').textContent);
        return scoreB - scoreA;
    });

    // Atualiza a posição e salva no localStorage
    teams.forEach((team, index) => {
        const position = (index + 1) + 'º';
        team.querySelector('.tpos').textContent = position;
        const teamId = team.id;
        const score = team.querySelector('.tscr').textContent;
        localStorage.setItem(`${teamId}-position`, position);
        localStorage.setItem(`${teamId}-score`, score);
        document.getElementById('teamblock').appendChild(team);
    });
}

function loadPenaltiesFromLocalStorage() {
    const teams = Array.from(document.querySelectorAll('.team.tm'));
    teams.forEach(team => {
        const teamId = team.id;
        const savedPenalty = localStorage.getItem(`${teamId}-penalty`);
        if (savedPenalty) {
            team.querySelector('.tplt').textContent = savedPenalty;
        }
    });
}

// Função para carregar pontuações e posições do localStorage
function loadFromLocalStorage() {
    const teams = Array.from(document.querySelectorAll('.team.tm'));
    teams.forEach(team => {
        const teamId = team.id;
        const savedPosition = localStorage.getItem(`${teamId}-position`);
        const savedScore = localStorage.getItem(`${teamId}-score`);
        const savedPenalty = localStorage.getItem(`${teamId}-penalty`);
        if (savedPosition && savedScore) {
            team.querySelector('.tpos').textContent = savedPosition;
            team.querySelector('.tscr').textContent = savedScore;
            team.querySelector('.tplt').textContent = savedPenalty ? savedPenalty : '0'; // Se não houver penalidade, exibe 0
        }
    });
}


// Adiciona um evento de clique aos elementos com a classe "tscr"
const tscrElements = document.querySelectorAll('.tscr');
tscrElements.forEach(element => {
    element.addEventListener('click', () => {
        // Abre um prompt para editar o valor
        const newValue = prompt('Digite o novo valor:');
        // Atualiza o valor se não for cancelado
        if (newValue !== null) {
            element.textContent = newValue;
            // Armazena a nova pontuação no armazenamento local
            const teamId = element.parentNode.parentNode.id;
            localStorage.setItem(`${teamId}-score`, newValue);
            updatePosition();
        }
    });
});

loadFromLocalStorage();

updatePosition();
// Adiciona um evento de clique aos elementos com a classe "tplt" para editar penalidades
const tpltElements = document.querySelectorAll('.tplt');
tpltElements.forEach(element => {
    element.addEventListener('click', () => { const newPenalty = prompt('Digite a nova penalidade:');
        // Atualiza o valor se não for cancelado
        if (newPenalty !== null) {
            element.textContent = newPenalty;
            // Armazena a nova pontuação no armazenamento local
            const teamId = element.parentNode.parentNode.id;
            localStorage.setItem(`${teamId}-penalty`, newPenalty);
            updatePosition();
        }
    });
});


// Carrega as penalidades do localStorage ao carregar a página
loadPenaltiesFromLocalStorage();