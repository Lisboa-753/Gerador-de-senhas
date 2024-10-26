let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password"); // Corrigido para containerPassword

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()+";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; // Pega o valor inicial do slider

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value; // Atualiza o valor do slider em tempo real
};

function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
  }
  

function copyPass() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha); // Copia a senha gerada para a área de transferência
}
