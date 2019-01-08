var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                "k", "l", "m", "n", "o", "p", "q", "r",
                "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9; 

var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
    guessesLeft--;
    document.querySelector("#guesses-left").innerHTML = "Guesses left: " + guessesLeft;
};
var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterToGuess);

};

var updateGuessesSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = "Guesses so far: " + guessedLetters;
};


var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessesSoFar();
};

document.onkeyup= function(event) {
    var userGuess = event.key;
    guessedLetters.push(event.key);
    updateGuessesLeft();
    updateGuessesSoFar();
    console.log(event);

    if (letterToGuess === userGuess) {
        alert("You win!");
        wins++;
        reset();
    }
};

