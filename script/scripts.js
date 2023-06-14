const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const senha = document.getElementById('password').value

    if (username === '' || senha === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    alert('Usuário cadastrado com sucesso!');
});
