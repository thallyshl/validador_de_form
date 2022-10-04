const form = document.querySelector('.screen').addEventListener('submit', evt => {
    
    evt.preventDefault();
    validator();

});

const validator = () => {
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if (emailRegex.exec(email.value)) {
        console.log('igual');
    } else {
        const small = document.querySelector('.erroEmail');
        small.className = 'error';
        small.innerHTML =  'Email inválido';

    }


    console.log(email.value)
}