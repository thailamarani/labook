#LABOOK - BACKEND#

Esse é o backend do projeto Labook, uma rede social para compartilhamento de posts.

---Tecnologias utilizadas---
Node.js
Typescript
Express
Knex
SQL e SQLite
JWT
Bcrypt
UUID
Dotenv
Postman
Roteamento
Autenticação e autorização
Geração de hashes
Arquitetura em camadas

---Funcionalidades---

*O backend do Labook possui os seguintes endpoints:*
Criar usuário
Método HTTP: POST
Path: /user/signup

{
    "name": "Alice",
    "email": "alice@example.com",
    "password": "123456"
}

Output de sucesso:

{
    "token": "<token de autenticação>"
}

Login
Realiza o login de um usuário na plataforma.

Método HTTP: POST

Path: /user/login

Input:

{
    "email": "alice@example.com",
    "password": "123456"
}
Output de sucesso:

{
    "token": "<token de autenticação>"
}
Criar post
Cria um novo post na plataforma.

Método HTTP: POST

Path: /post/create

Input:

{
    "photo": "https://www.example.com/photo.jpg",
    "description": "Lorem ipsum dolor sit amet."
}
Output de sucesso:

{
    "message": "Post criado com sucesso!"
}
Editar post
Edita um post existente na plataforma.

Método HTTP: PUT

Path: /post/edit/:postId

Input:

{
    "photo": "https://www.example.com/new-photo.jpg",
    "description": "Dolor sit amet, consectetur adipiscing elit."
}
Output de sucesso:

{
    "message": "Post editado com sucesso!"
}
Deletar post
Deleta um post existente na plataforma.

Método HTTP: DELETE

Path: /post/delete/:postId

Output de sucesso:

{
    "message": "Post deletado com sucesso!"
}
Dar like em post
Adiciona um like em um post existente na plataforma.

Método HTTP: PUT

Path: /post/like/:postId

Output de sucesso:

{
    "message": "Like adicionado com sucesso!"
}
Dar dislike em post
Adiciona um dislike em um post existente na plataforma.

Método HTTP: PUT

Path: /post/dislike/:postId

Output de sucesso:

{
    "message": "Dislike adicionado com sucesso!"
}
Classes e orientação a objetos
O código desse projeto foi desenvolvido com a utilização de classes e orientação a objetos, visando uma melhor organização e escalabilidade. As classes principais são:

User
Representa um usuário na plataforma.

Métodos:

signup: cria um novo usuário na plataforma.
login: realiza o login de um usuário na plataforma.
Post
Representa um post na plataforma.

Métodos:

createPost: cria um novo post na plataforma.
getPostById: retorna um post existente na plataforma pelo seu id.
editPost: edita um post existente na plataforma.
deletePost: deleta um post existente na plataforma.
likePost: adiciona um like em um post existente na plataforma.
dislikePost: adiciona um dislike em um post existente na plataforma.
Como rodar o projeto
Clone o repositório.
Instale as dependências com o comando npm install.
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
DB_HOST=<host do banco de dados>
DB_USER=<usuário do banco de dados>
DB_PASSWORD=<senha do banco de dados>
DB_NAME=<nome do banco de dados>
JWT_KEY=<chave para geração de tokens JWT>
Crie as tabelas do banco de dados com o comando npm run createTables.
Rode o projeto com o comando npm run start.

Autoria
Esse projeto foi desenvolvido por Thaila Marani Ghisini Costa como parte do bootcamp de desenvolvimento web full-stack da Labenu.