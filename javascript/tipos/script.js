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
// saída: NaN (Not a Number).

if(telefone){
    console.log("Telefone: ", telefone * 2);
} else {
    console.log("Telefone não existe.");
}