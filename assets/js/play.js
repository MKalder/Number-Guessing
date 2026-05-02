// var initialization
const buttonPlay = document.getElementById("play-btn");
const buttonRestart = document.getElementById("restart-btn");
const gameTitle = document.querySelector(".game-title");
const infoGame = document.querySelector(".game-subline");

// game specific numbers
let playedGames = 0;
let highscore = 0;
let attempts = 5;
let random = randomNumber();

const inputNumber = document.getElementById
    ('input-number');

const attemptsCounter = document.querySelector(".score>span");
const highscoreNumber = document.querySelector(".highscore>span");

// text changes
infoGame.textContent = "Enter a number in the range of 1 - 20 and hit the play button! How fast can you guess my number?";
attemptsCounter.textContent = attempts;
highscoreNumber.textContent = highscore;

// listeners
buttonPlay.addEventListener("click", play);
buttonRestart.addEventListener("click", newGame);


// functions
function randomNumber() {
    const ran = Math.floor(Math.random() * 20 + 1);
    return ran;
}

function checkGuess(guess) {
    if (!guess || guess < 1 || guess > 20) {
        infoGame.textContent = "Please enter a number between 1 and 20.";
        return false;
    }
    return true;
}

//updateUI()
//endGame()
//resetGame()

function play() {
    const guess = Number(inputNumber.value);
    console.log(guess);

    if (checkGuess(guess)) {
        attempts--;
        if (random === guess) {
            gameTitle.textContent = "Congratulations 🥳";
            infoGame.textContent = "JA 🏆";
            buttonPlay.disabled = true;
            if (highscore < attempts) {
                highscore = attempts;
                highscoreNumber.textContent = highscore;
            }
        } else if (attempts === 0) {
            gameTitle.textContent = "...GAME OVER 😔";
            infoGame.textContent = "No more attempts left";
            buttonPlay.disabled = true;
        } else if (random > guess) {
            infoGame.textContent = "Input is smaller than my number."
        } else {
            infoGame.textContent = "Input is greater than my number."
        }
        attemptsCounter.textContent = attempts;
    }

}

function newGame() {
    playedGames++;
    buttonPlay.disabled = false;
    attempts = 5;
    attemptsCounter.textContent = attempts;
    random = randomNumber();
    gameTitle.textContent = "Another Round 😀";
    infoGame.textContent = "Game Number " + playedGames + " Enter a number in the range of 1 - 20 and hit the play button! How fast can you guess my number?";
}