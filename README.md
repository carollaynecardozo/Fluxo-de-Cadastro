# Desenvolvimento da Tela de Login e Cadastro

## Objetivo do Projeto
O objetivo deste projeto foi criar uma interface simples para autenticação de usuários em uma aplicação web, implementando uma tela de **login** e **cadastro**.  

- A **tela de login** permite que os usuários se autentiquem com seu e-mail e senha.  
- A **tela de cadastro** permite que novos usuários se registrem, fornecendo informações como nome, celular, e-mail, data de nascimento e senha.  

## Tecnologias Utilizadas
As seguintes tecnologias foram empregadas no projeto:  

- **HTML**: Estrutura da página web.  
- **CSS**: Estilização da página, incluindo layout, cores, fontes e disposição dos elementos.  
- **JavaScript**: Manipulação da interação do usuário, como validação de formulário, exibição de mensagens e envio de dados para o servidor.  
- **Node.js (Backend)**: Servidor para processar requisições do front-end e interagir com o banco de dados.  
- **Banco de Dados (MySQL ou MongoDB)**: Armazena informações dos usuários registrados.  
- **Docker**: Utilizado para rodar o banco de dados (MySQL) e o Adminer para visualização das tabelas.  

## Estrutura do Projeto
O projeto foi dividido em duas partes principais:  

1. **Frontend (Interface do Usuário)**  
2. **Backend (Lógica de Servidor e Banco de Dados)**  

---

## 1. Frontend: Tela de Login e Cadastro

### **Estrutura HTML**
- A estrutura HTML foi criada para ter duas telas principais: **Login** e **Cadastro**.  
- Cada tela possui um formulário:  
  - **Login**: Coleta e-mail e senha.  
  - **Cadastro**: Coleta nome, celular, e-mail, data de nascimento e senha.  

### **Estilos CSS**
- Interface limpa e responsiva.  
- A tela foi dividida em duas seções:  
  - Uma para o formulário de **login**.  
  - Outra para o formulário de **cadastro**.  
- Funcionalidade de alternância entre as telas ao clicar em "Cadastro" ou "Login".  
- Design responsivo, adaptável para dispositivos móveis e desktop.  

### **Interatividade com JavaScript**
- Manipulação de eventos, como troca entre telas de login e cadastro.  
- **Validação de formulários**: Garante que todos os campos sejam preenchidos corretamente antes do envio.  
- **Envio de dados para o backend**:  
  - Utilização da Fetch API para enviar os dados no formato JSON.  

---

## 2. Backend: Lógica de Servidor e Banco de Dados

### **Node.js e Express**
- Uso do **Express** para criar um servidor que processa as requisições HTTP (POST) dos formulários.  

#### **Rotas Implementadas**
- **Rota de Cadastro**:  
  - Recebe os dados do novo usuário e os armazena no banco de dados.  
- **Rota de Login**:  
  - Verifica e autentica o usuário com base no e-mail e senha.  
  - Em um cenário real, a autenticação pode ser aprimorada com **JWT ou sessões**.  

### **Banco de Dados (MySQL)**
- O banco de dados foi configurado com uma tabela chamada `usuarios`, contendo:  
  - `id`, `nome`, `celular`, `email`, `data_nascimento`, `senha`.  
- O servidor Node.js se conecta ao MySQL e insere os dados na tabela ao receber uma requisição de cadastro.  

---

## Fluxo do Projeto

### **Tela de Login**
1. O usuário insere o e-mail e senha.  
2. Se os dados estiverem corretos, o login é bem-sucedido.  
3. Caso contrário, uma mensagem de erro é exibida.  

### **Tela de Cadastro**
1. O usuário insere nome, celular, e-mail, data de nascimento e senha.  
2. O **JavaScript** envia esses dados para o **backend**.  
3. O **backend** armazena os dados no **banco de dados** e retorna uma resposta de sucesso ou erro.  

### **Troca entre Telas**
- Ao clicar em "Cadastrar" na tela de **login**, a tela de **cadastro** é exibida.  
- Após o cadastro bem-sucedido, o usuário é redirecionado para a tela de **login**.  

---

## Conclusão
O projeto foi desenvolvido com foco na simplicidade e funcionalidade.  

- **Frontend:** HTML, CSS e JavaScript para a interface e interatividade do usuário.  
- **Backend:** Node.js e MySQL para gerenciamento dos dados e autenticação.  

### **Possíveis Melhorias**
Este projeto pode ser expandido para incluir:  

- **Autenticação mais segura** (JWT ou sessões).  
- **Validação de senha no backend**.  
- **Recuperação de senha**.
- **Refatorar código do front-end para utilizar o React.**

Essa implementação serve como base para muitas aplicações web que exigem login e cadastro de usuários. 🚀  
