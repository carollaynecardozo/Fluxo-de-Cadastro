// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifique se o e-mail e a senha são válidos
    if (email === 'admin@example.com' && password === '1234') {
        alert('Login bem-sucedido!');
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

document.getElementById('show-register').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'flex';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coletando os dados do formulário de cadastro
    var fullName = document.getElementById('fullName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('newEmail').value;
    var dob = document.getElementById('dob').value;
    var newPassword = document.getElementById('newPassword').value;

    // Enviar os dados para o servidor usando Fetch API
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: fullName,
            celular: phone,
            email: email,
            data_nascimento: dob,
            senha: newPassword
        })
    })
    .then(response => response.json())  // Receber a resposta do servidor
    .then(data => {
        // Verificar a resposta do servidor
        if (data.status === 'success') {
            alert(data.message);
            // Voltar para a tela de login
            document.querySelector('.register-container').style.display = 'none';
            document.querySelector('.login-container').style.display = 'flex';
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao registrar usuário');
    });
});
