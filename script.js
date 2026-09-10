const wordsList = ["Cachalot", "Petunia", "Serviette"];
const phrasesList = ["my Parents", "my Sisters", "my Brother"];
let score = 0
let userChoice = prompt("chose between the 'word' and the 'phrase'.");
while( userChoice !== "word" && userChoice !== "phrase" ){
    alert("Invalid choice. Please choose either 'word' or 'phrase'.");
    userChoice = prompt("chose between the 'word' and the 'phrase'.");
}
if(userChoice === "word"){
    for(let i = 0; i < wordsList.length; i++){
        let userWord = prompt("Enter the word number " + (i + 1) + " of the Words' list.");
        if( userWord === wordsList[i]){
            score++ ;
        }   
    }
}
else{
    for (let i = 0; i < phrasesList.length; i++){
        let userPhrase = prompt("Enter the phrase number " +  (i + 1) + " of the Phrases' list.");
        if( userPhrase === phrasesList[i]){
            score++ ;
        }
    }
}

console.log("Your final score is " + score + " out of " + (userChoice === "word" ? wordsList.length : phrasesList.length));