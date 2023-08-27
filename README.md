
## Documentação da API

### Rotas de usuários

#### Retorna todos os usuários

```http
  GET /users
```

Necessário Token JWT de admin

#### Retorna um usuário

```http
  GET /users/:id
```

Necessário Token JWT de admin

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Atualiza e retorna o usuário

```http
  PUT /users
```

Necessário Token JWT de usuário

#### Cria e retorna novo usuário

```http
  POST /users
```

#### Deleta usuário

Necessário Token JWT de usuário

```http
  DELETE /users
```

### Rotas de Login

#### Retorna Token JWT do usuário

```http
  POST /tokens
```

#### Retorna Token JWT do administrador

```http
  POST /tokens/adminToken
```

### Rotas de administrador

#### Cria e retorna novo administrador

Necessário Token JWT de um administrador e token

```http
  POST /admins
```

#### Atualiza e retorna o administrador

Necessário Token JWT de um administrador e token

```http
  PUT /admins
```

### Rotas de alunos

#### Retorna todos os alunos

Necessário Token JWT de um usuário

```http
  GET /alunos
```

#### Retorna um aluno

Necessário Token JWT de um usuário

```http
  GET /alunos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Cria e retorna novo aluno

Necessário Token JWT de um usuário

```http
  POST /alunos
```

#### Atualiza e retorna um aluno

Necessário Token JWT de um usuário

```http
  PUT /alunos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Deleta usuário

Necessário Token JWT de usuário

```http
  DELETE /alunos/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

### Rotas de fotos

#### Recebe foto de aluno

Necessário Token JWT de usuário

```http
  POST /photos/
```


## Uso/Exemplos

#### Rota

```http
  GET /users
```

#### Retorno

```json
{
    "alunos": [
        {
            "id": 11,
            "nome": "João",
            "sobrenome": "Pedro2",
            "email": "pedrolima@teste.com",
            "idade": 25,
            "peso": 75,
            "altura": 1.75,
            "Photos": []
        },
        {
            "id": 9,
            "nome": "João",
            "sobrenome": "Pedro",
            "email": "pedrolima2223@teste.com",
            "idade": 25,
            "peso": 75,
            "altura": 1.75,
            "Photos": [
                {
                    "url": "https://api.hopdev.cloud/images/1693166843477_19598.jpg",
                    "filename": "1693166843477_19598.jpg",
                    "id": 6
                },
                {
                    "url": "https://api.hopdev.cloud/images/1693166658162_14136.jpg",
                    "filename": "1693166658162_14136.jpg",
                    "id": 5
                }
            ]
        }
    ]
}
```
