const inputField = document.getElementById("num");
const resultLabel = document.getElementById("result");

let numToGuess = Math.floor(Math.random() * 100);

function check() {
  if (inputField.value == numToGuess) resultLabel.innerHTML = "CORRECT";
  else if (inputField.value > numToGuess) resultLabel.innerHTML = "TOO HIGH";
  else if (inputField.value < numToGuess) resultLabel.innerHTML = "TOO LOW";
}