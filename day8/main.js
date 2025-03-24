// // Select all required elements
// let currentWord = document.querySelector("#current-word");
// let wordInput = document.querySelector("#word-input");
// let time = document.querySelector("#time");
// let score = document.querySelector("#score");
// let message = document.querySelector("#message");

// console.log(currentWord);

//     let timer =6;
//     let count =0;


// const words = [
//     "function", "variable", "object", "array", "string",
//     "boolean", "number", "event", "callback", "promise",
//     "async", "await", "closure", "prototype", "loop",
//     "scope", "context", "spread", "rest", "destructuring",
//     "arrow", "map", "filter", "reduce", "fetch"
// ];

// window.addEventListener('DOMContentLoaded', init);

// function init() {
//     showWord(words);
//     wordInput.addEventListener("input") 
// }


// function showWord() {
//     let randomIndex = Math.floor(Math.random() * words.length); 
//     currentWord.innerText = words[randomIndex]; 
// }


// function StartMatch(){
        
//         if(matchWords ()){
//             showWord(words)
//             wordInput.value =" "
//             timer =6;
//             countdown()
//             count++
        
//             message.innerHTML ="CORRECT"
//         }else{
//             message.innerHTML="INCORRECT"
//         }
//         score.innerHTML =count
// }

// function matchWords(){

// }
// function countdown(){

// }
// function gameOver(){
//     if(time)
// }

















// Select all required elements
let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let time = document.querySelector("#time");
let score = document.querySelector("#score");
let message = document.querySelector("#message");

// Word list
const words = [
    "function", "variable", "object", "array", "string",
    "boolean", "number", "event", "callback", "promise",
    "async", "await", "closure", "prototype", "loop",
    "scope", "context", "spread", "rest", "destructuring",
    "arrow", "map", "filter", "reduce", "fetch"
];

// Game settings
let timeLeft = 5; // Initial countdown time
let userScore = 0;
// let isPlaying;

// Initialize game on page load
window.addEventListener('DOMContentLoaded', init);

function init() {
    showWord(); // Show first random word
    wordInput.addEventListener("input", checkMatch);

    setInterval(countdown, 1000); // Start countdown
    setInterval(checkStatus, 50); // Check game status
}

// Function to display a random word
function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerText = words[randomIndex];
}

// Check if user input matches the word
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

// Countdown timer function
function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        isPlaying = false;
    }
    time.innerText = timeLeft;
}

// Check game status
function checkStatus() {
    if (!isPlaying && timeLeft === 0) {
        message.innerText = "Game Over!";
        message.style.color = "red";
        userScore = 0; // Reset score
        score.innerText = userScore;
        wordInput.value = "";
    }
}
/////////////////////eventlistinor,,,super,setinterval,settimeout







