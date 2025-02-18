USE usuariosDB;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    celular VARCHAR(20),
    email VARCHAR(255) UNIQUE,
    data_nascimento DATE,
    senha VARCHAR(255)
);