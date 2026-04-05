# Arrow Functions
Arrow Functions é uma forma concisa de escrever funções no JavaScript, utilizando a sintaxe `() => {}`.
```javascript
const exemplo = () => {}
```
Quando tem **APENAS UMA** (e somente uma) instrução, é opcional o uso das chaves `{}`:
```javascript
// const exemplo = (parâmetro(s)) => retorno
const somar = (a, b) => a + b;
```
Ou até mesmo, quando ela tem **APENAS UM** (e somente um) parâmetro só, é opcional o uso dos parênteses `()`:
```javascript
// const exemplo = parâmetro => retorno
const somarCom2 = a => a + 2;
```
Se não pedir nenhum, utiliza os parênteses **vazio**:
```javascript
const diaDoMesVersao2 = () => (new Date()).getDate();
```

Para executar:
```javascript
console.log(somar(2,3)); // saída: 5
console.log(somarCom2(2)); // saída: 4
console.log(diaDoMesVersao2()); // saída: 4
```