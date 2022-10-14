// variaveis globais
const button = document.getElementById('btn-header');
const emailHeader = document.getElementById('email-header');
const passwordHeader = document.getElementById('password-header');

function verificaLogin() {
  if (emailHeader.value === 'tryber@teste.com' && passwordHeader.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

button.addEventListener('click', verificaLogin);
