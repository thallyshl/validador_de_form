const form = document.querySelector('.screen').addEventListener('submit', evt => {
    validatorForm();

    if (validatorForm) {
        evt.preventDefault();
    } else {
        console.log('teste');
    }

});


const validatorForm = () => {
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    if (emailRegex.exec(email.value)) {
        const small = document.querySelector('#smallEmail');
        small.classList.replace('error', 'errorNone')

    } else {
        const small = document.querySelector('#smallEmail');
        small.className = 'error';
        small.innerHTML = 'Email inválido';
    }


    if (passwordRegex.exec(password.value)) {
        const small = document.querySelector('#smallPassword');
        small.classList.replace('error', 'errorNone')
    } else {
        const password = document.querySelector('#Password');
        password.className = 'error';
    }

    if (emailRegex.exec(email.value) && passwordRegex.exec(password)) {
        return true;
    } else {
        return false;
    }

}