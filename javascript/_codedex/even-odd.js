
/*
printa somente pares.
a palavra reservada continue faz com que se uma determinada condição for true
a palavra reservada continue encerre a iteração atual em um determinado for ou 
while loop e passamos para o próximo.

já o break se uma condição em loop for verdadeira, encerra completamente o loop,
e a execução continua na primeira linha após o bloco do loop.

*/
for(let i = 1; i <= 50; i++){
  if(i % 2 === 1){
    continue;
  }
  console.log(i)
  if(i === 42){
    break;
  }
  
}