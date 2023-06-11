const form = document.getElementById('formulario');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value

    if (nome === '' || email === '' || senha === '') {
        alert('Por favor preenhca todos os campos do formulário.');
        return;
    }

    alert('Usuário cadastrado com sucesso!');
});