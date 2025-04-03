#CVAuto

Arquitetura do Sistema:
- Visão Geral: O sistema será baseado em uma arquitetura cliente-servidor, onde o frontend, desenvolvido em React, se comunica com o backend, construído em Node.js, através de APIs RESTful. O banco de dados será PostgreSQL, gerenciado via PGAdmin. Todo o projeto será containerizado utilizando Docker para facilitar a configuração e a escalabilidade.

Diagrama de Arquitetura:
- Um diagrama representando a interação entre o frontend, backend, banco de dados e os containers Docker pode ser incluído aqui.

Tecnologias Utilizadas:

Frontend: 
  - React.js: Biblioteca para construção de interfaces de usuário.

Backend:
  - Node.js: Ambiente de execução para JavaScript no servidor.
  - Express: Framework para construção de APIs RESTful.
  - Sequelize: ORM (Object-Relational Mapping) para integração com PostgreSQL.

Banco de Dados: 
  - PostgreSQL: Banco de dados relacional robusto e escalável, gerenciado via PGAdmin.

Containerização:
- Docker: Para criar e gerenciar containers que encapsulam o ambiente de desenvolvimento e produção.

Autenticação:
  - JWT (JSON Web Tokens): Para autenticação segura e gerenciamento de sessões.
Estrutura do Banco de Dados:

Usuários:
  sql
  CREATE TABLE usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100),
      email VARCHAR(100) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      papel VARCHAR(10) CHECK (papel IN ('comprador', 'vendedor')),
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  

Carros:
  sql
  CREATE TABLE carros (
      id SERIAL PRIMARY KEY,
      marca VARCHAR(50),
      modelo VARCHAR(50),
      ano INT,
      preco DECIMAL,
      descricao TEXT,
      imagens TEXT[],
      vendedor_id INT REFERENCES usuarios(id),
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  




Transações:
  sql
  CREATE TABLE transacoes (
      id SERIAL PRIMARY KEY,
      comprador_id INT REFERENCES usuarios(id),
      carro_id INT REFERENCES carros(id),
      data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

APIs:
- GET /api/cars: Retorna uma lista de todos os carros disponíveis.
- POST /api/cars: Adiciona um novo carro à lista.
- GET /api/cars/:id: Retorna detalhes de um carro específico.
- POST /api/auth/login: Autentica um usuário e retorna um token JWT.
- GET /api/users: Retorna uma lista de usuários (acesso restrito a administradores).


Segurança:
- Autenticação: Implementação de autenticação JWT para proteger as rotas críticas.
- Criptografia: Utilização de bcrypt para criptografar senhas antes de armazená-las no banco de dados.
- Validação de Dados: Uso de bibliotecas como Joi para validar dados de entrada.


Testes:
- Testes Unitários: Utilização de Jest e Enzyme para testes de componentes React e lógica de negócios.
- Testes de Integração: Testes utilizando Supertest para verificar a funcionalidade das APIs.
- Testes E2E: Utilização de Cypress para simular a experiência do usuário em todo o aplicativo.

Containerização com Docker:

Dockerfile: Definição do ambiente de desenvolvimento e produção para o backend Node.js e frontend React.js.


  # Backend

  FROM node:14
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["npm", "start"]



  # Frontend

  FROM node:14
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["npm", "start"]
  


docker-compose.yml: Arquivo de configuração para orquestrar os serviços de backend, frontend e banco de dados.
  
yaml
  version: '3.8'
  services:
    frontend:
      build: ./frontend
      ports:
        - "3000:3000"
      depends_on:
        - backend

    backend:
      build: ./backend
      ports:
        - "5000:5000"
      depends_on:
        - db

    db:
      image: postgres
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: password
        POSTGRES_DB: ecommerce
      ports:
        - "5432:5432"
  


Desdobramentos Futuros:

- Sistema de chat para comunicação direta entre compradores e vendedores.
- Sistema de Recomendação: Implementação de um algoritmo que sugere carros com base nas preferências dos usuários.
- Aplicativo Móvel: Desenvolvimento de um aplicativo nativo para Android e iOS para aumentar a acessibilidade.
- Funcionalidade de Leilão: Adição de uma opção para que usuários possam leiloar carros, aumentando a competitividade.

