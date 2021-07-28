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
    const goodGuess = validateInput(guessedLetterValue);
  if(goodGuess) {makeGuess(goodGuess)};
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

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
      // Is the input empty?
      guessMessage.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
      // Did you type more than one letter?
      guessMessage.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
      // Did you type a number, a special character or some other non letter thing?
      guessMessage.innerText = "Please enter a letter from A to Z.";
    } else {
      // We finally got a single letter, omg yay
      return input;
    }
  };
  

const makeGuess = function(letter){
    if (guessedLettersArray.includes(letter.toUpperCase())){
        guessMessage.innerHTML = `You have already guessed ${letter} silly`;
    }else{
        guessedLettersArray.push(letter.toUpperCase());
    }
    console.log(guessedLettersArray);
}





