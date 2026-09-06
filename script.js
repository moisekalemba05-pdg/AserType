const listeMots = ["Cachalot", "Petunia", "Serviette"];
score = 0

for(let i = 0; i < listeMots.length; i++){
let userInput = prompt("Veuillez saisir le mot " + (i+1) + " :");
if( userInput === listeMots[i]){
score++
}else{
console.log("tu n'as pas trouver le mot " + listeMots[i] + " !")
}}
console.log("votre score est de " + score + " sur " + listeMots.length);