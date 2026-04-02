// String
let nome = "João";
console.log("Olá " + nome + "!");

// Number
let idade = 20;
console.log("Você tem " + idade + " anos.");

// Boolean
let eMaiorDeIdade = idade >= 18;
console.log("É maior de idade? " + eMaiorDeIdade);

// Null e Undefined
// null basicamente é um valor vazio. Ou seja, o valor foi definido, mas foi explicitamente eu disse que o valor é vazio.
let endereco = null;
console.log("Endereço: ", endereco);
// temos que tomar cuidados para quando vamos tratar valores null, pois eles podem tratar erros. Por exemplo com valores to tipo numbers, devemos fazer uma verificação apra ver se existe algum valor antes de fazer uma soma, multiplicação, etc.
console.log("multiplicação: ", endereco * 2); // vai multiplicar por 0.

//undefined quer dizer que ainda não foi definido um valor, eu não inicei um valor, por isso fica indefinido. Devemos ter cuidado na hora de manipular os dados.
let telefone;
console.log("Telefone: ", telefone);

// resultado diferente, pois o undefined não é um número.
// console.log("Telefone: ", telefone * 2);
// saída: NaN (Not a Number). Aparece quando multiplica com undefined e uma String (quando for texto, como o nome), mas se for um número entre aspas ele consegue ser multiplicado por conta da coerção de dados.

if(telefone){
    console.log("Telefone: ", telefone * 2);
} else {
    console.log("Telefone não existe.");
}

// Coerção Implicita de tipos:

// NULL e UNDEFINED => são tratados como False em contextos booleanos.
// Strings e Numeros => são tratados como true em contextos booleanos.
// Exceto o 0 e string vazia ("") => tratado como false em contextos booleanos.

//Coerção de dados meio que transforma o dado, por exemplo em um if(nome), mesmo que seja úma string ele irá transforma em boolean para avaliar a condicional e se for um let num = "2", ele vai verificar e ver se consegue converter para o tipo number para realizar alguma operação matemática com essa String "2". E se ele não conseguir converter ele da o NaN.
//Ou seja, em contexto de interação entre diferentes tipos o JavaScript tenta converter os valores para um tipo comum (coerção de tipos).

console.log("2" + 3); // saída: "23", pois o operador + é usado para concatenação de strings, então o JS converte o número 3 para a string "3" e depois concatena com a string "2", resultando em "23".
console.log("2" * 3); // saída: 6, pois o JS converte a string "2" para o número 2 e depois realiza a multiplicação.

// Coerção Explicita de tipos:
let numero = 1;

let numeroString = String(numero); // converte o número para string
let segundoNumero = (10).toString(); // outra forma de converter número para string

let stringNumero = "123";
let numeroConvertido = Number(stringNumero); // converte a string para número
let numeroConvertido2 = parseInt(stringNumero); // outra forma de converter string para número inteiro
let numeroConvertido3 = parseFloat(stringNumero); // outra forma de converter string para número decimal

console.log(typeof numero, numero); // saída: "number"
console.log(typeof numeroString, numeroString); // saída: "string"
console.log(typeof segundoNumero, segundoNumero); // saída: "string"
console.log(typeof numeroConvertido, numeroConvertido); // saída: "number"
console.log(typeof numeroConvertido2, numeroConvertido2); // saída: "number"
console.log(typeof numeroConvertido3, numeroConvertido3); // saída: "number"

let stringInvalida = "João";
let stringInvalidaNumero = Number(stringInvalida); // tenta converter a string "João" para número, mas não é possível, então o resultado é NaN (Not a Number)
console.log(typeof stringInvalidaNumero, stringInvalidaNumero); // saída: "number", NaN é do tipo number, mas representa um valor inválido.


// VARIAVEIS

// let, const e var

// let é usado para declarar variáveis que podem ser reatribuídas, ou seja, seu valor pode ser alterado ao longo do tempo. 
// let tem o escopo de bloco, ou seja, ela só é acessível dentro do bloco onde foi declarada (entre chaves {}), o que ajuda a evitar problemas de escopo e torna o código mais previsível.
// Exemplo:
let altura = 1.75;
altura = altura + 0.01; // reatribuindo o valor da variável altura
console.log(altura); // saída: 1.76
altura = "Abacate"; // reatribuindo o valor da variável altura para uma string
console.log(altura); // saída: "Abacate"

// const é usado para declarar variáveis que não podem mudar de valor
// const não pode ser declarada sem um valor inicial
const pi = 3.14;
// pi = 3.14159; // isso vai gerar um erro, pois estamos tentando reatribuir um valor a uma constante
console.log(pi); // saída: 3.14

// var é usado para declarar variaveis que podem mudar de valor
// var tem escopo global ou de função


for(var i = 0; i < 3; i++) {
    var nomeVar = "João";
    console.log("i dentro do for:", i); // saída: 0, 1, 2
}
console.log("Nome var:", nomeVar); 
// saída: "João", pois a variável nomeVar foi declarada com var, ela tem escopo global ou de função, então ela é acessível fora do bloco do for. 
// O que pode causar problemas em outros contextos, por isso é recomendado usar let para variáveis de loop.
