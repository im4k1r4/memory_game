const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault(); // não usar o padrão de enviar o form e dar reload
    
    localStorage.setItem('player', input.value); // chave  + valor digitado = salva key
    window.location = 'pages/game.html'; // redireciona para game.html
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);