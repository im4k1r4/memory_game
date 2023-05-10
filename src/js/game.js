// DECLARO O GRID (QUE POSSUI AS DIVS DA CARTA, FRONT E BACK)
const grid = document.querySelector('.grid');

// ARRAY COM O NOME DAS CARTAS
const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'meeseeks',
    'rick',
    'scroopy',
    'summer',
];

// FN QUE CRIA O ELEMENTO DA CARTA:
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// VARIAVEIS QUE ARMAZENAM AS DUAS CARTAS CLICADAS
let firstCard = '';
let secondCard = '';

//FN QUE CHECA SE O JOGO ACABOU:
const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length === 20) {
        alert('Parabéns, você conseguiu!');
    }
}

// FN QUE CHECA SE AS CARTAS SÃO IGUAIS
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

//FN QUE REVELA A CARTA E ARMAZENA QUAL A PRIMEIRA E SEGUNDA CARTA CLICADA
const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard == '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard == '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }
    
}
    
// FN QUE CRIA A CARTA:
const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../src/images/${character}.png')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    card.setAttribute('data-character', character);

    return card;
}

//FN QUE GERA O JOGO:
const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    suffledArray = duplicateCharacters.sort(() => Math.random() -0.5);

    suffledArray.forEach((character) => {
        
            const card = createCard(character);
            grid.appendChild(card);
    });

}

//GERANDO O JOGO
loadGame();