
function subtracao(a, b) {
    return a - b;
}

// isso aqui é uma arrow function:
const subtracao2 = (a, b) => a - b;
//quando uma Arrow Function tem apenas uma instrução, e somente uma, podemos deixar ela desse jeito ai de cima.

function somar2(a){
    return a + 2;
}

// quando tem um e somente um parâmetro, parênteses é opcional
const somar2versao2 = a => a + 2;

function diaDoMes(){
    return  (new Date()).getDate();
}

// quando não tem parâmetro deixamos com parênteses vazio.
const diaDoMesVersao2 = () => (new Date()).getDate();

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


console.log(diaDoMesVersao2());
console.log(somar2versao2(2));
console.log(superFuncao());
