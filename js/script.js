const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textInputGuess = document.querySelector("input.letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";

const updateWordsInProgress = function(word){
    let wordArray = word.split("");
    let guessedWordArray = [];
    for(letter in wordArray){
        guessedWordArray.push("●");
    }
    wordInProgress.innerText = guessedWordArray.join("");

}

guessButton.addEventListener('click', function(e){
e.preventDefault();
updateWordsInProgress(word);
})

