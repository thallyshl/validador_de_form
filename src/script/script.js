const btn = document.querySelector(".btn")
const email = document.querySelector(".email").value;
const password = document.querySelector(".password").value;

btn.addEventListener('click', cadastrar)



function cadastrar() {
    if (email.value === "" || password.value === "") {
        alert("Coloque todos os dados")
    } else {
        alert("Deu certo")
    }

}

