// var initialization
const buttonPlay = document.getElementById("play-btn");
const buttonRestart = document.getElementById("restart-btn");

const gameTitle = document.querySelector(".game-title");
const infoGame = document.querySelector(".game-subline");
infoGame.textContent = "Enter a number in the range of 1 - 20 and hit the play button! How fast can you guess my number?";

// game specific numbers
let playedGames = 0;
let highscore = 0;
let attempts = 5;
const random = randomNumber();
const inputNumber = document.getElementById
    ('input-number');
const attemptsCounter = document.querySelector(".score>span");
const highscoreNumber = document.querySelector(".highscore>span");

attemptsCounter.textContent = attempts;
highscoreNumber.textContent = highscore;

buttonPlay.addEventListener("click", play);
buttonRestart.addEventListener("click", newGame);


// functions
function randomNumber() {
    const ran = Math.floor(Math.random() * 20 + 1);
    return ran;
}

function play() {
    attempts--;

    if (random === Number(inputNumber.value)) {
        gameTitle.textContent = "Congratulations 🥳";
        infoGame.textContent = "JA 🏆";
        buttonPlay.disabled = true;
        if (highscore < attempts) {
            highscore = attempts;
            highscoreNumber.textContent = highscore;
        }
        playedGames++;
    }

    // TODO: Bug issue

    if (attempts === 0) {
        gameTitle.textContent = "...GAME OVER 😔";
        infoGame.textContent = "No more attempts left";
        buttonPlay.disabled = true;
    } else if (random > Number(inputNumber.value)) {
        infoGame.textContent = "Input is smaller than my number."
    } else {
        infoGame.textContent = "Input is greater than my number."
    }

    attemptsCounter.textContent = attempts;
}

function newGame() {
    buttonPlay.disabled = false;
    attempts = 5;
    gameTitle.textContent = "Another Round 😀";
    infoGame.textContent = "Game Number " + playedGames;

}