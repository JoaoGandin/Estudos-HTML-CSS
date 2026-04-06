# JSON
- JSON significa **JavaScript Object Notation**.
- JSON é um formato de texto simples para armazenar e transportar dados.
- O JSON é semelhante à sintaxe usada para criar **objetos** em **JavaScript**. Por isso, um programa JavaScript pode facilmente converter dados JSON em objetos JavaScript nativos.
- O JSON facilita o envio e o armazenamento de dados entre computadores.
- O JSON é usado para **enviar**, **receber** e **armazenar dados**.

OBS.: Já que ele é parecido com o objeto em JavaScript, a diferença que na criação da key ela TEM que estar entre **aspas duplas** e depois vem os dois pontos. 
Exemplo {"nome":"João"}
## Tipos de Dados em JSON
- **String:** sempre com aspas duplas
- **Números:**
- **Booleans:**
- **Objetos:**
- **Arrays:**
- **null:**
## Funções
- O JavaScript possui uma função integrada para converter **strings JSON** em **objetos JavaScript**:
```javascript
JSON.parse()
```

- O JavaScript também possui uma função integrada para converter um **objeto** em uma **string JSON**:
```javascript
JSON.stringify()
```
### Exemplo de JSON
```json
[ --> aqui estou abrindo um array 
    { --> aqui estou fazendo o objeto em JSON
        "time": "Corinthians", --> string no JSON sempre tem que ficar entre as duplas e separa por vírgula.
        "estadio":{ --> tipo objeto no JSON.
            "nome": "Neo Quimica Arena",
            "publico_recorde": 63267, --> números em JSON não precisa de aspas duplas e separa por vírgula, não esquece.
            "capacidade": null --> null tbm não precisa de aspas duplas e não preciso colocar vírgula no final agora, porque já acabei de colocar os dados.
        },
        "jogadores": [{ --> array em JSON
            "nome": "Cássio",
            "idade": 33,
            "titular": true, --> boolean não precisa de aspas duplas
            "times": ["Grêmio", "PSV", "Corinthians"] --> estrutura de array, mostrando o time que ele jogou
        },
        { 
            "nome": "Luan",
            "idade": 27,
            "titular": false,
            "times": ["Grêmio", "Corinthians"]
        }]
    }
]
```
Se tu quiser testar o código no **JSONLint**:
```json
[ 
    { 
        "time": "Corinthians", 
        "estadio":{
            "nome": "Neo Quimica Arena",
            "publico_recorde": 63267,
            "capacidade": null
        },
        "jogadores": [{
            "nome": "Cássio",
            "idade": 33,
            "titular": true, 
            "times": ["Grêmio", "PSV", "Corinthians"] 
        },
        { 
            "nome": "Luan",
            "idade": 27,
            "titular": false,
            "times": ["Grêmio", "Corinthians"]
        }]
    }
]
```