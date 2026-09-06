const wordsList = ["Cachalot", "Petunia", "Serviette"];
const phrasesList = ["my Parents", "my Sisters", "my Brother"];
let score = 0
let userInput = ""
console.log("choose between the 'wordsList' and the 'phrasesList'. " );
let userAnswer = prompt("Enter 'word' for 'wordsList' or 'phrase' for 'phrasesList'.");

while( userAnswer !== "word" && userAnswer !== "phrase" ){
userAnswer = prompt("Enter 'word' for 'wordsList' or 'phrase' for 'phrasesList'.");
}

if(userAnswer === "word"){
for(let i = 0; i < wordsList.length; i++){
userInput = prompt("Enter the word number " + (i + 1) + " of the Words' list.");
if( userInput === wordsList[i]){
score++ ;
}}}
else{
for (let i = 0; i < phrasesList.length; i++){
userInput =  prompt("Enter the phrase number " +  (i + 1) + " of the Phrases' list.");
if( userInput === phrasesList[i]){
score++ ;
}}}

console.log("Your final score is " + score + " out of " + (userAnswer === "word" ? wordsList.length : phrasesList.length));