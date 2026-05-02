// var initialization
const button = document.getElementById("play-btn");

const gameTitle = document.querySelector(".game-title");
const infoGame = document.querySelector(".game-subline");
infoGame.textContent = "Enter a number in the range of 1 - 20 and hit the play button! How fast can you guess my number?";

// game specific numbers
let playedGames = 0;
let highscore = 0;
let attempts = 20;
const random = randomNumber();
const inputNumber = document.getElementById
    ('input-number');
const attemptsCounter = document.querySelector(".score>span");
attemptsCounter.textContent = attempts;

button.addEventListener("click", play);


// functions
function randomNumber() {
    const ran = Math.floor(Math.random() * 20 + 1);
    return ran;
}

function play() {
    attempts--;


    if (random === Number(inputNumber.value)) {
        gameTitle.textContent = "Congratulations 🥳"
        if (highscore < attempts) {
            highscore = attempts;
        }
        playedGames++;

    }
    if (attempts === 0) {
        gameTitle.textContent = "...GAME OVER 😔";
        infoGame.textContent = "No more attempts left";
    }

    attemptsCounter.textContent = attempts;
}

function newGame() {
    // TODO
}