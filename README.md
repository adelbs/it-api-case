# it-api-case

API de exemplo, para fins de estudos ou cases. Simula um backend simples, com lançamentos de gastos. Possui cadastro de categorias e lançamentos.

Essa API é escrita em NodeJS, e os arquivos são persistidos no disco.

## Pré Requisitos 

* NodeJS: Você encontra o node em https://nodejs.org/ (recomendável instalar a versão LTS).
* Git: Se você não tem instalado, sugerimos que dê uma olhada em: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git. Existem também diversos sites que ensinam passo a passo como instalar.

## Como Rodar

Abra o terminal (CMD, bash, GitBash ou qualquer terminal de sua preferência)

1) Baixe o repositório:

```bash
git clone git@github.com:adelbs/it-api-case.git
```

2) Entre na pasta

```bash
cd it-api-case
```

3) Instalar

```bash
npm install
```

4) Rodar

```bash
node index.js
```

Se você ver a mensagem abaixo, está tudo certo, e a API já está rodando:

```
Aplicação no ar!
```

## Como usar a API

O servidor subirá em *localhost* na porta *3200*.<br>
Dois endpoints estarão disponíveis:
* /api/v1/categoria - CRUD de categorias (ex.: Alimentação, Transporte, Viagens, etc.)
* /api/v1/lancamento - CRUD de lançamentos

<br>

---
### [POST] /api/v1/categoria

Cria uma nova categoria

**Body:**

Exemplo:

```json
{
    "name": "Nome da Categoria"
}
```

**Responses:**

* 400: se estiver faltando algum campo
* 200: se tudo der certo. Retorna o objeto criado. Exemplo:

```json
{
    "id": "f897f208-67fe-44bc-bd54-4bd2df23e228",
    "name": "Nome da Categoria"
}
```
---
### [GET] /api/v1/categoria

Retorna a lista de todas as categorias criadas

**Response:**

Exemplo:

```json
[
    {
        "id": "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
        "name": "Alimentação"
    },
    {
        "id": "59955474-b1e2-4fda-aa20-daf98ea93f1e",
        "name": "Transporte"
    },
    {
        "id": "06d65a27-f65d-4fc0-b2ae-a937e9cfbbc7",
        "name": "Viagens"
    }
]
```
---
### [GET] /api/v1/categoria/:id

Retorna uma categoria, de acordo com o id passado

**Responses:**

* 404: se não encontrar o id
* 200: se encontrar, retorna o objeto. Exemplo:

```json
{
    "id": "f897f208-67fe-44bc-bd54-4bd2df23e228",
    "name": "Nome da Categoria"
}
```
---
### [DELETE] /api/v1/categoria/:id

Remove uma categoria, de acordo com o id passado

**Responses:**

* 404: se não encontrar o id
* 200: se a remoção deu certo
---
### [POST] /api/v1/lancamento

Cria um novo lançamento

**Body:**

Exemplo:

```json
{
    "idCategoria": "e4f7e894-18b7-4181-883b-2135d9ec3e17",
    "description": "Almoço na Padaria",
    "date": "21/10/2020",
    "value": 29.50
}
```

**Responses:**

* 400: se estiver faltando algum campo, ou se o formato de algum campo estiver errado
* 404: se não encontrar o idCategoria informado
* 200: se tudo der certo. Retorna o objeto criado. Exemplo:

```json
{
    "id": "7c208553-4ccc-4ced-89cc-d00fb34108e2",
    "idCategoria": "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
    "description": "Almoço na Padaria",
    "date": "21/10/2020",
    "value": 29.5
}
```
---
### [GET] /api/v1/lancamento

Retorna a lista de todos os lançamentos

**Response:**

Exemplo:

```json
[
    {
        "id": "7c208553-4ccc-4ced-89cc-d00fb34108e2",
        "idCategoria": "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
        "description": "Almoço na Padaria",
        "date": "21/10/2020",
        "value": 29.5
    },
    {
        "id": "68516374-cf76-44cb-ab21-f9bd63c8bba7",
        "idCategoria": "59955474-b1e2-4fda-aa20-daf98ea93f1e",
        "description": "Passagem de Avião para o Guarujá",
        "date": "20/10/2020",
        "value": 1831.1
    },
    {
        "id": "cdd4920b-1485-4af2-8da2-f57708421dc0",
        "idCategoria": "06d65a27-f65d-4fc0-b2ae-a937e9cfbbc7",
        "description": "Diária de Hotel em Maceió",
        "date": "22/10/2020",
        "value": 320
    }
]
```
---
### [GET] /api/v1/lancamento/:id

Retorna um lançamento, de acordo com o id passado

**Responses:**

* 404: se não encontrar o id
* 200: se encontrar, retorna o objeto. Exemplo:

```json
{
    "id": "7c208553-4ccc-4ced-89cc-d00fb34108e2",
    "idCategoria": "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
    "description": "Almoço na Padaria",
    "date": "21/10/2020",
    "value": 29.5
}
```
---
### [DELETE] /api/v1/lancamento/:id

Remove um lançamento, de acordo com o id passado

**Responses:**

* 404: se não encontrar o id
* 200: se a remoção deu certo
---
