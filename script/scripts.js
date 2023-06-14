const USERNAME_ID = 'username';
const PASSWORD_ID = 'password';
const PASSWORD_CONFIRM_ID = 'passwordConfirm';

const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById(USERNAME_ID).value;
    const senha = document.getElementById(PASSWORD_ID).value
    const senhaConfirm = document.getElementById(PASSWORD_CONFIRM_ID).value

    if (username === '' || senha === '' || senhaConfirm === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    if (!verificarSenhas(senha, senhaConfirm)) {
        return;
    }

    alert('Usuário cadastrado com sucesso!');
});

const verificarSenhas = (senha, senhaConfirm) => {
  if (senha !== senhaConfirm) {
    alert('As senhas não conferem!');
    return false;
  }
  return true;
};