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

// NULL e UNDEFINED => são tratados como False em contextos booleanos.

//Coerção de dados meio que transforma o dado, por exemplo em um if(nome), mesmo que seja úma string ele irá transforma em boolean para avaliar a condicional e se for um let num = "2", ele vai verificar e ver se consegue converter para o tipo number para realizar alguma operação matemática com essa String "2".

let num = "2";

console.log("tipo da variável num:", typeof(num));
console.log("multiplicação:", num * 2);