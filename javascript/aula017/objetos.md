# Objetos
Objetos são basicamente variáveis com muitos "valores" dentro.
Esses "valores", chamamos de propriedades.

### Key, Valor e Propriedade
- **Key** é o que vamos usar para identificar algo no objeto. Como se fosse o índice do array (0, 1, 2...), porém com nomes.
- **Valor** é o dado que vai ter na Key
- **Propriedade** de um objeto é a Key + Valor.
**Exemplo:** 
```javascript
const carro = {marca:"Fiat", ano:2005} 
```
Key é a marca e ano
Valor é "Fiat" e 2005
Propriedade é marca:"Fiat" e ano:2005

## Objetos Literais
Objetos literais é a forma comum. É quando você já declara as propriedades e os valores dele.
**Uso:** Ideal para dados rápidos, configurações ou quando você só precisa de uma instância única daquele objeto.

**Exemplo:**
```javascript
const carro = {
                marca:"Fiat",
                modelo:"Uno",
                ano:2005,
                placa:"ABC-1234",
                buzina(){alert("Biiiiiiiiiii")} //método
} 
```
Note que a propriedade buzina executa uma ação. Sempre que uma propriedade de um objeto é uma função, damos a ela o nome de método. Atualmente, a forma mais comum de escrever isso é a sintaxe abreviada: `nomeDoMetodo() { }`, eliminando a necessidade de escrever function explicitamente.

## Objetos Não Literais (Instanciados)
São objetos criados a partir de um "molde" (uma Classe ou uma Função Construtora) usando a palavra-chave `new`. 
