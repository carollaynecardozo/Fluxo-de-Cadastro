const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configurar o app Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // seu usuário do MySQL
    password: '12345',  // sua senha do MySQL
    database: 'usuariosDB'
});

db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados: ', err);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
    const { nome, celular, email, data_nascimento, senha } = req.body;

    // Inserir os dados no banco de dados
    const query = 'INSERT INTO usuarios (nome, celular, email, data_nascimento, senha) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nome, celular, email, data_nascimento, senha], (err, result) => {
        if (err) {
            console.error('Erro ao registrar usuário: ', err);
            return res.status(500).send({status: 'error', message: 'Erro ao registrar usuário'});
        }
        res.status(200).send({status: 'success', message: 'Usuário registrado com sucesso'});
    });
});

app.get('/', (req, res) => {
  res.send('hello world')
})
// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
