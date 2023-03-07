const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({Target}) => {
    if (EventTarget.volue.length > 2){
        button.removeAttribute('disabled');
        return;
    } 
    
        button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    /*console.log('logando...'); */

    /*para salvar valores dos players no localstorage no navegador*/
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

/* eu não sei como fiz isso,mas está funcionando. NÃO MEXA */
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
