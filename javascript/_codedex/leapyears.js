let contador = null;

for(let ano = 2000; ano <= 3000; ano++){
    if((ano % 4 === 0) && !(ano % 100 === 0) || (ano % 400 === 0)){
        console.log(`${ano} é bissexto`)
        contador++
    }
}

console.log(`Foram contados ${contador} anos bissextos`);
