// JavaScript Document
(() => {
console.log("Linked up");
//create an array to hold the words to be guessed (mdn) -> arrays, mdn const
//arrays can store data
const words = ["blue", "orange", "yellow", "magenta", "violet"];


//set up variable stack

let currentWord = null,
  wordHint = document.querySelector(".hintString"),
  guessBox = document.querySelector("input"),
  wrongGuesses;

function takeGuess() {
  //this is refering to whatever yoy
  console.log(this.value);

//if there is no letter, exit the game loop
  if (this.value == "" || this.value.length < 1 ) {
    return;
  }
  //set up the win and lose bath (if/else)
  if (!currentWord.includes(this.value)) {
    console.log('valid letter!');

    //losing path
    //compare my letter gues to the word to see if it's in there

  } else {
    //winning path
  }
}

function init() {
  // look at MDN -> the math object
  currentWord =
  words[Math.floor(Math.random()*words.length)]; //gives a random num like 1.2, multiply by length of words (4), floor makes it round

// fill the hint with underscores -> MDN string methods //array .map method
//each letter is an index in the array
wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");

  console.log(`guess this word: ${currentWord}. It's at ${words.indexOf(currentWord)}`);
}

init();
//event handling
//initButton.addEventListener('click', init);
guessBox.addEventListener('keyup', takeGuess);
})();
