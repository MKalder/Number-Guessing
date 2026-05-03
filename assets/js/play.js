// var initialization
const buttonPlay = document.getElementById("play-btn");
const buttonRestart = document.getElementById("restart-btn");
const gameTitle = document.querySelector(".game-title");

const infoGameSub = document.querySelector(".game-sub");

// game specific numbers
let playedGames = 0;
let highscore = 0;
let attempts = 5;
let random = randomNumber();
console.log("Random Number: " + random);

const inputNumber = document.getElementById('input-number');

const attemptsCounter = document.querySelector(".score>span");
const highscoreNumber = document.querySelector(".highscore>span");

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
        infoText.textContent = "Please enter a number between 1 and 20.";
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
            infoGameSub.textContent = "You have nailed it! 🏆🎯";
            buttonPlay.disabled = true;
            if (highscore < attempts) {
                highscore = attempts;
                highscoreNumber.textContent = highscore;
            }
        } else if (attempts === 0) {
            gameTitle.textContent = "...GAME OVER 😔";
            infoGameSub.textContent = "No more attempts left";
            buttonPlay.disabled = true;
        } else if (random > guess) {
            infoGameSub.textContent = "Input is smaller than my number."
        } else {
            infoGameSub.textContent = "Input is greater than my number."
        }
        attemptsCounter.textContent = attempts;
    }

}

function newGame() {
    // playedGames++;
    buttonPlay.disabled = false;
    attempts = 5;
    attemptsCounter.textContent = attempts;
    random = randomNumber();
    gameTitle.textContent = "Another Round 😀";
    infoGameSub.textContent = "How fast can you find it?";
}