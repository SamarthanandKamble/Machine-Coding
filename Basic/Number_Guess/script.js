const form = document.querySelector("#form");
const inputBox = document.querySelector("#input-box");
const submitBtn = document.querySelector("#submit-btn");
const restartBtn = document.querySelector("#restart-btn");
const footer = document.querySelector("#footer");
let finalResult = document.querySelector("#final-result");
let resultText = document.createElement("p");
let computerGuess = 0;
let userGuesses = [];

function onGameStart() {
  computerGuess = Math.floor(Math.random() * 100);
  console.log(`Computer guessed : ${computerGuess}`);
  restartBtn.disabled = true;
  submitBtn.disabled = false;
}
function onGameEnd() {
  submitBtn.disabled = true;
  restartBtn.disabled = false;
  finalResult.textContent = "";
  resultText.textContent = "";
}

function checkGuessedNumber(value) {
  if (value) {
    finalResult.textContent += ` ${value}`;
    userGuesses.push(value);
    if (value === computerGuess) {
      resultText.textContent = `Your guess is Correct , ${computerGuess}`;
      onGameEnd();
    } else if (value < computerGuess) {
      resultText.textContent = "Your guess is low";
    } else {
      resultText.textContent = "Your guess is high";
    }
    footer.appendChild(resultText);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkGuessedNumber(parseInt(inputBox.value));
  inputBox.value = "";
});

restartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  onGameStart();
  checkGuessedNumber(parseInt(inputBox.value));
  inputBox.value = "";
});

onGameStart();
