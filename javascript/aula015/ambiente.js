let num = [5, 8, 2, 9, 3];


num.push(1); // o método push() coloca o elemento, no caso o 1, no final da array.
num.sort(); // organiza os elementos em ordem crescente
console.log(num);
// o atributo .length mostra QUANTOS elementos tem (ele começa contando do 1)
console.log(`O array tem ${num.length} elementos.`);

/*
for(let i = 0; i < num.length; i++){
    console.log(`O elemento no índice ${i} é o ${num[i]}`);
}
*/

// PARA cada posição EM num eu mostro o num[i]
for(let i in num){
    console.log(num[i]);
}

console.log(`O número 3 está na posição ${num.indexOf(3)}`);