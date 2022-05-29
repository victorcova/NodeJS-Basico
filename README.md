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

REST: Combinado de normas para se contruir uma API robusta. Ex: GET, POST, PATCH, PUT, DELETE, dentre outros conceitos.
RESTFULL: Quando a API segue todas as normas do REST.
HTTP: Protocolo de comunicação cliente servidor: Cliente -> request | Servidor -> response

Para cada verbo do REST resulta num resultado no BD: 
CRUD: Create, Read, Update e Delete
Create -> POST | Read -> GET | Update -> PATCH/PUT | Delete -> DELETE
