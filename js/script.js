const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInputGuess = document.querySelector("input.letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLettersArray = [];



guessButton.addEventListener('click', function(e){
    e.preventDefault();
   
    let guessedLetterValue = textInputGuess.value;
    updateWordsInProgress(word);
    console.log(guessedLetterValue)
   makeGuess(inputFunction(guessedLetterValue));
   guessMessage.innerText = "";
   textInputGuess.innerText="";
    
})

// functions

const updateWordsInProgress = function(word){
    let wordArray = word.split("");
    let guessedWordArray = [];
    for(letter in wordArray){
        guessedWordArray.push("●");
    }
    wordInProgress.innerText = guessedWordArray.join("");

}

const inputFunction = function(input){
    const acceptedLetter = /[a-zA-Z]/
    if(input == ""){
        guessMessage.innerHTML = "You must enter a value";
    } else if (input.length > 1) {
        guessMessage.innerHTML = "you can only guess one letter at a time"
    } else if (input.match(acceptedLetter)) {
        return input;
    }else {
        guessMessage.innerHTML = "Please enter a valid letter"
    }
}

const makeGuess = function(letter){
    if (guessedLettersArray.includes(letter.toUpperCase())){
        guessMessage.innerHTML = `You have already guessed ${letter} silly`;
    }else{
        guessedLettersArray.push(letter.toUpperCase());
    }
    console.log(guessedLettersArray);
}





