let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let time = document.querySelector("#time");
let score = document.querySelector("#score");
let message = document.querySelector("#message");

const words = [
    "function", "variable", "object", "array", "string",
    "boolean", "number", "event", "callback", "promise",
    "async", "await", "closure", "prototype", "loop",
    "scope", "context", "spread", "rest", "destructuring",
    "arrow", "map", "filter", "reduce", "fetch"
];

let timeLeft = 6; 
let userScore = 0;

window.addEventListener('DOMContentLoaded', init);

function init() {
    showWord(); 
    wordInput.addEventListener("input", checkMatch);

    setInterval(countdown, 1000); 
    setInterval(checkStatus, 50); 
}

function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex];
}

function checkMatch() {
    if (wordInput.value.toLowerCase() === currentWord.innerText.toLowerCase()) {
        message.innerText = "Correct!";
        message.style.color = "green";
        wordInput.value = "";
        showWord(); // Load new word
        userScore++;
        timeLeft = 5; // Reset time
        score.innerText = userScore;
    }
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        isPlaying = false;
    }
    time.innerText = timeLeft;
}

function checkStatus() {
    if (!isPlaying && timeLeft === 0) {
        message.innerText = "Game Over!";
        message.style.color = "red";
        userScore = 0; 
        score.innerText = userScore;
        wordInput.value = "";
    }
}



// lear/////////////////////eventlistinor,,,super,setinterval,settimeout







