var computerChoices = ["turkey", "gravy", "ham", "corn", "potatoes"];
var currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var guessesLeft = 12;
var correctGuesses = currentWord.replace(/./g, "_").split("");
var usableChars = "abcdefghijklmnopqrstuvwxyz";
var gameStart = false;
console.log(currentWord);
console.log(correctGuesses);

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    if (gameStart == false) {
        gameStart = true;
        document.getElementById("current-word").textContent = correctGuesses;
    }
    else {
        if (usableChars.includes(userGuess)) {
            if (currentWord.includes(userGuess)) {
                document.getElementById("letter-guessed").textContent += " " + userGuess;

                for (i = 0; i < correctGuesses.length; i++) {
                    if (currentWord[i] == userGuess) {
                        console.log(userGuess);
                        correctGuesses[i] = userGuess;
                        console.log(correctGuesses);
                        document.getElementById("current-word").textContent = correctGuesses;
                    }
                }
            }
        }
    }
}