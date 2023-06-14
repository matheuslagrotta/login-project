const form = document.getElementById('formulario');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === '' || password.value === '') {
        alert('Por favor, preenhca os camapos de usuário e senha!');
    } else {
        alert('Usuário e senha validados com sucesso!')
    } 
    form.submit();
    window.location.href = '';
})