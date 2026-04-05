
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


console.log(diaDoMesVersao2());
console.log(somar2versao2(2));