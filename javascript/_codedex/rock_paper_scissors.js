// gerando um número inteiro aleatório entre dois valores, de 0 a 2.
let computerNum = Math.floor(Math.random()* (3 - 0) + 0);
let playerNum = 0;
let player = "";
let computer = "";

if (playerNum === 0){
  player = "Rock";
} else if (playerNum === 1){
  player = "Paper";
} else if (playerNum === 2){
  player = "Scissors";
}

if (computerNum === 0){
  computer = "Rock";
} else if (computerNum === 1){
  computer = "Paper";
} else if (computerNum === 2){
  computer = "Scissors";
}

console.log("Player picked: " + player);
console.log("Computer picked: " + computer)


// if (playerNum === 0 && computerNum === 2){
//   console.log("The Player won!")
// } else if (playerNum === 2 && computerNum === 1){
//   console.log("The Player won!")
// } else if (playerNum === 1 && computerNum === 0){
//   console.log("The Player won!")
// } else if (playerNum === computerNum){
//   console.log("draw")
// } else {
//   console.log("The computer won!")
// }
if ((playerNum === 0 && computerNum === 2) || 
    (playerNum === 2 && computerNum === 1) || 
    (playerNum === 1 && computerNum === 0)){
    console.log("The Player won!")
} else if(playerNum === computerNum){
  console.log("draw")
} else {
  console.log("The computer won!")
}
