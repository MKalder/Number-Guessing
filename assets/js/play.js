// var initialization
const buttonPlay = document.getElementById("play-btn");
const buttonRestart = document.getElementById("restart-btn");
const gameTitle = document.querySelector(".game-title");
const toast = document.getElementById("toast");

const gameInfo = document.querySelector(".game-info");

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

function showToast(message, type = "info") {
    toast.textContent = message;
    toast.classList.remove("info", "success", "error");
    toast.classList.add(type);
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);

}

function checkGuess(guess) {
    if (!guess || guess < 1 || guess > 20) {
        showToast("Please enter a number between 1 and 20.", "error");
        return false;
    }
    return true;
}

function setPlayButtonState(isActive) {
    const button = buttonPlay;
    button.disabled = !isActive;

    if (isActive) {
        button.classList.remove("disabled");
        button.classList.add("active");
    } else {
        button.classList.add("disabled");
        button.classList.remove("active");
    }

}

function play() {
    const guess = Number(inputNumber.value);
    console.log(guess);

    if (checkGuess(guess)) {
        attempts--;
        if (random === guess) {
            gameTitle.textContent = "Congratulations";
            showToast("You have nailed it! 🏆🎯", "success");
            //setPlayButtonState(false);
            if (highscore < attempts) {
                highscore = attempts;
                highscoreNumber.textContent = highscore;
            }
        } else if (attempts === 0) {
            gameTitle.textContent = "...GAME OVER";
            showToast("No more attempts left", "error");
            //setPlayButtonState(false);
        } else if (random > guess) {
            showToast("⚠️ Input is smaller than my number.");
        } else {
            showToast("⚠️ Input is greater than my number.");
        }
        attemptsCounter.textContent = attempts;
    }

}

function newGame() {
    // playedGames++;
    attempts = 5;
    attemptsCounter.textContent = attempts;
    random = randomNumber();
    gameTitle.textContent = "Another Round";
    showToast("New Round", "success");
    //setPlayButtonState(true);
}