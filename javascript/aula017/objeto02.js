// propriedade é o conjunto do objeto (key + valor, ex: marca:"ford")
// key é o nome para identificar (marca, ano, modelo...)
// valor é o dado que ela guarda.
// se num objeto tiver uma "função" chamamos ela de método
// é uma prática, no JavaScript, escrever objetos utilizando o const

// OBJETO LITERAL: determinamos as propriedades que ele vai ter
const carro = {
    marca:"ford",
    modelo: "ka",
    ano:2015,
    placa:"ABC-1234",
    //buzina: function() {console.log("Biiiiiiiiiii")} <-- jeito antigo
    buzina(){console.log("Biiiiiiiiiii")},
    completo(){
        // this seria tipo "esse" this object ou esse objeto, irei pegar o que está nesse objeto ou seja this.marca seria carro.marca
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`
    }
};

carro.buzina();
console.log(carro.marca);
console.log(carro["placa"]);
console.log(carro.completo());
