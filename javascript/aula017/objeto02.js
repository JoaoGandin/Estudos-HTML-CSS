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
    buzina: function() {console.log("Biiiiiiiiiii")}
};

carro.buzina();
console.log(carro.marca);
console.log(carro["marca"]);
