# NodeJS-Basico
 Curso Tera - Conceitos iniciais do NODEJS


Node.Js não é Javascript.
O Node é uma plataforma que roda Javascript fora do browser, usando a V8 que foi desenvolvida pela equipe do Google Chrome.
Seu principal ganho é poder utilizar a mesma linguagem para programar tanto no front quanto no back.

_____

Outros conceitos:

NPM - NODE PACKAGE MANAGER:
É um registro de pacotes que consiste de três componentes distintos:
- Um site para descobrir pacotes;
- Uma interface de linha de comando para interagir com esse registro;
- O registro em si.

É o local onde o DEV pode encontrar pacotes (bibliotecas de conhecimento) para seus projetos.
Os pacotes podem ser de vários tipos, como: express, bootstrap, etc.

Comandos:
npm init -y (inicia o projeto com o arquivo package.json)
npm install nome-da-biblioteca (exemplo: npm install faker) | faker: uma biblioteca que gera uma API com nomes fakes.

No package.json é possível editar as informações do nosso projeto:
- name: é o nome da aplicação
- main: é o arquivo principal que roda ao executar o programa
- scripts: que você pode automatizar algumas tarefas
- autor: dono do projeto (PF ou PJ)
- description: que você pode inserir mais informações sobre a sua aplicação
- dependencies: após instalar um pacote é gerado esse campo registrando todas as dependencias do seu projeto
_____

REST (em português, significa “Transferência de Estado Representacional”):
É um estilo de arquitetura - um combinado de normas para se construir uma API robusta.
Padrão: cliente-server (cliente pede, servidor entrega)
Stateless: mantém sempre o estado e a qualidade da entrega.

Exemplo de verbos do REST:
GET (ler dados), POST (criar um novo dado), PATCH (altera um dado existente), PUT (atualizar um dado), DELETE (deletar um dado).

RESTFULL: Quando a API segue todas as normas do REST.
HTTP: Protocolo de comunicação cliente servidor: Cliente -> request | Servidor -> response

REQUISIÇÕES:

CABEÇALHO - Um cabeçalho da requisição contém:
- Tipo de conteúdo (texto, JSON, mídia, etc),
- Código da resposta (200=ok, 404=notfound, etc) -> veja mais: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
- Cookies, tokens, encodings, etc.

ENDEREÇOS - contém:
- VERBO+URL | Exemplos:
1- GET api.aluno.com.br/usuario/3: Obtem o usuário com o ID número 3;
2- POST api.aluno.com.br/usuario/: Cria novo usuário;
3- PUT api.aluno.com.br/usuario/3: Atualiza o usuário com o ID número 3;
4- DELETE api.aluno.com.br/usuario/3: Deleta o usuário com ID número 3.
_____

Para cada verbo do REST resulta num resultado no BD: 
CRUD: Create, Read, Update e Delete
Create -> POST | Read -> GET | Update -> PATCH/PUT | Delete -> DELETE
