# Arrow Functions
Arrow Functions é uma forma concisa de escrever funções no JavaScript e oferecem uma sintaxe mais curta e simples de escrever funções.
Especialmente útil para funções anônimas.
Utilizando a sintaxe `() => {}`

Normalmente trabalhamos com constantes `const` nas funções, para que não possam ser repetidas.
Exemplo da sintaxe:
```javascript
const nomeDaFuncao = (param1, param2, param3) => {
    // corpo da função
}
```
---
Mas podemos simplificar as Arrow Functions:
- Quando tem **APENAS UMA** (e somente uma) **instrução**, é opcional o uso das chaves `{}`:
```javascript
// const exemplo = (parâmetro(s)) => retorno
const somar = (a, b) => a + b;
```
---
- Quando ela tem **APENAS UM** (e somente um) **parâmetro** só, é opcional o uso dos parênteses `()`:
```javascript
// const exemplo = parâmetro => retorno
const somarCom2 = a => a + 2;
```
---
- Se não pedir nenhum, utiliza os parênteses **vazio**:
```javascript
const diaDoMesVersao2 = () => (new Date()).getDate();
```

Para executar:
```javascript
console.log(somar(2,3)); // saída: 5
console.log(somarCom2(2)); // saída: 4
console.log(diaDoMesVersao2()); // saída: 5 (dia do mês atual de quando eu fiz)
```
--- 
Arrow Function com várias instruções:
```javascript
// apenas criando qualquer coisa nessa function para mostrar como fica uma arrow function com várias instruções
function superFuncao(a, b){
    let subtracao = a - b;
    subtracao -= 2;
    let diaDoMes = (new Date()).getDate();
    return diaDoMes;
}
// em arrow function:
const superFuncao2 = (a, b) => {
    let subtracao = a - b;
    subtracao -= 2;
    let diaDoMes = (new Date()).getDate();
    return diaDoMes;
}
```