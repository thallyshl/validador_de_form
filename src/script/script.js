const form = document.querySelector('.screen').addEventListener('submit', evt => {
    
    evt.preventDefault();
    validator();

});

const validator = () => {
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if (emailRegex.exec(email.value)) {
        ;
    } else {
        const small = document.querySelector('.erroEmail');
        small.className = 'error';
        small.innerHTML =  'Email inválido';

    }
    if (passwordRegex.exec(password.value)){
        const small = document.querySelector('.erroPassword');
        
    }else{
        const small = document.querySelector('.erroPassword');
        small.className = 'error';
        small.innerHTML =  'Sua senha deve conter 8 caracteres sendo pelo menos um</br> deles maiúsculo, um número e um caractere especial';
    }


    console.log(email.value)
}