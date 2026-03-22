let myNumber = 10;
let binary = "";

// Enquanto o número for maior que 0, vamos continuar dividindo ele por 2 
// e verificando o resto para construir a representação binária do número. 
// O resto da divisão por 2 nos dirá se o bit é 0 ou 1, e vamos concatenar isso na string 'binary' que estamos construindo. 
// Depois de processar o número completamente, 'binary' conterá a representação binária de 'myNumber'.
while (myNumber > 0){
  if(myNumber % 2 === 0){
    binary = "0" + binary
  }else{
    binary = "1" + binary
  }
  myNumber = Math.floor(myNumber / 2)
}

console.log(binary)