const dnaPieces = ["A", "C", "G", "T"];
const myDNA = [];

for(let i = 0; i < 24; i++){
    let result = "";
    for(let j = 0; j < 3; j++){
        //gera um numero aleatório entre 0 e o tamanho do array de dnaPieces (4)
        const randomIndex = Math.floor(Math.random() * dnaPieces.length);
        // concatena o resultado com a letra correspondente ao numero aleatório
        result += dnaPieces[randomIndex];
    }
    // adiciona o resultado a ultima posição do array myDNA
    myDNA.push(result);
}


console.log(myDNA)