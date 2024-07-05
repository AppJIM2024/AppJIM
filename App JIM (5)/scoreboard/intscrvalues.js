document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ua-score'
    const scoreElement = document.getElementById('ua-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('ua-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('ua-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ua-penalty'
    const penaltyElement = document.getElementById('ua-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('ua-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('ua-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ua-points'
    const penaltyElement = document.getElementById('ua-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('ua-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('ua-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ub-score'
    const scoreElement = document.getElementById('ub-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('ub-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('ub-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ub-penalty'
    const penaltyElement = document.getElementById('ub-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('ub-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('ub-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atubliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ub-points'
    const penaltyElement = document.getElementById('ub-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('ub-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('ub-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atubliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'uc-score'
    const scoreElement = document.getElementById('uc-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('uc-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('uc-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'uc-penalty'
    const penaltyElement = document.getElementById('uc-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('uc-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('uc-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atucliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'uc-points'
    const penaltyElement = document.getElementById('uc-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('uc-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('uc-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atucliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'da-score'
    const scoreElement = document.getElementById('da-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('da-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('da-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'da-penalty'
    const penaltyElement = document.getElementById('da-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('da-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('da-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atdaliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'da-points'
    const penaltyElement = document.getElementById('da-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('da-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('da-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atdaliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'db-score'
    const scoreElement = document.getElementById('db-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('db-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('db-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'db-penalty'
    const penaltyElement = document.getElementById('db-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('db-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('db-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atdbliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'db-points'
    const penaltyElement = document.getElementById('db-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('db-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('db-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, atdbliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ta-score'
    const scoreElement = document.getElementById('ta-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('ta-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('ta-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ta-penalty'
    const penaltyElement = document.getElementById('ta-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('ta-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('ta-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, attaliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'ta-points'
    const penaltyElement = document.getElementById('ta-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('ta-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('ta-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, attaliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'tb-score'
    const scoreElement = document.getElementById('tb-score');
    
    if (scoreElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedScore = localStorage.getItem('tb-score');
        
        if (storedScore === null) {
            // Se não existirem, armazena os dados
            const score = scoreElement.textContent;
            localStorage.setItem('tb-score', score);
        } else {
            // Se os dados já existirem, atualiza o conteúdo da página com os dados armazenados
            scoreElement.textContent = storedScore;
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'tb-penalty'
    const penaltyElement = document.getElementById('tb-penalty');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('tb-penalty');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('tb-penalty', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, attbliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
})
document.addEventListener("DOMContentLoaded", function() {
    // Procura pelo elemento com o ID 'tb-points'
    const penaltyElement = document.getElementById('tb-points');
    
    if (penaltyElement) {
        // Verifica se os dados já existem no armazenamento local
        const storedPenalty = localStorage.getItem('tb-points');
        
        if (storedPenalty === null) {
            // Se não existirem, armazena os dados
            const penalty = '-'; // valor padrão, caso não haja penalidade armazenada
            localStorage.setItem('tb-points', penalty);
            penaltyElement.textContent = penalty;
        } else {
            // Se os dados já existirem, attbliza o conteúdo da página com os dados armazenados
            penaltyElement.textContent = storedPenalty;
        }
    }
})