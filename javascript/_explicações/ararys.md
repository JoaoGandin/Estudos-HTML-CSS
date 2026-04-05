# Array
Array é uma variável composta, ou seja, uma variável capaz de armazenar vários valores em uma mesma estrutura.
É ideal para listar coisas da **mesma natureza**, onde a ordem importa. Você acessa os valores pela posição (índice).
No JavaScript guardamos valores assim:
```javascript
const lista = ["Banana", "Maçã", "uva"];
```
No JavaScript podemos guardar diferentes valores também em uma array:
```javascript
const pessoa = ["João", 20];
```

## Métodos
---
- **.push():** Adiciona um ou mais elementos ao **final** da lista.
```javascript
const frutas = ["Banana", "Maçã"];
frutas.push("Uva"); // ["Banana", "Maçã", "Uva"]
```
---
- **.unshift():** Adiciona um ou mais elementos no **início** do array e "empurra" os outros para a frente.
```javascript
const frutas = ["Banana", "Maçã"];
frutas.unshift("Morango"); // ["Morango", "Banana", "Maçã"]
```
---
- **.pop():**  Remove o **último** item da lista.
```javascript
const frutas = ["Banana", "Maçã", "Uva"];
frutas.pop(); // ["Banana", "Maçã"]
```
---
- **.shift():** Remove o **primeiro** elemento do array e reorganiza os índices de todos os outros.
```javascript
const frutas = ["Banana", "Maçã", "Uva"];
frutas.shift(); // ["Maçã", "Uva"]
```
---
- **.splice(índice, quantidade):** Serve para remover, substituir ou adicionar itens em qualquer posição.
```javascript
const cores = ["Red", "Green", "Blue"];
// Remover (começa no índice e remove para a direita, se caso você coloquei mais de 1 em quantidade):
cores.splice(1, 1); // Remove 1 item no índice 1 ("Green")
// Remover o último item da lista, não importa o tamanho dela:
cores.splice(-1, 1)
// Substituir .splice(índice, quantidade, item):
cores.splice(1, 1, "White"); // Remove "Blue" e adiciona "White"
// Adicionar sem remover .splice(índice, 0, item):
cores.splice(1, 0, "Amarelo"); // Adiciona no índice 1 sem deletar nada
```
---
- **.indexOf():** Retorna o **primeiro índice** (posição) onde um elemento específico pode ser encontrado no array. Se o item não existir, ele retorna `-1`.
```javascript
const letras = ["A", "B", "C"];
console.log(letras.indexOf("B")); // 1
console.log(letras.indexOf("Z")); // -1
```
---
- **.includes():** Verifica se um array **possui** um determinado elemento, retornando `true` (verdadeiro) ou `false` (falso). É ótimo para condicionais (`if`).
```javascript
const alunos = ["João", "Maria"];
if (alunos.includes("João")) {
    console.log("O aluno está na lista!");
}

```
---
## Propriedades
- **.length:** Diz **quantos** itens existem na lista.
```javascript
const numeros = [10, 20, 30, 40];
console.log(numeros.length); // 4
```
